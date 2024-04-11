import { SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tag, TagLabel, useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import {
  type OptionsOrGroups,
  type GroupBase,
  type LoadingIndicatorProps,
} from 'chakra-react-select';
import { AsyncSelect, chakraComponents } from 'chakra-react-select';
import debounce from 'debounce-promise';
import { useCallback, useEffect, useState } from 'react';

import type { GetSkillsParameters } from '~/shared/api/model';
import { useApi } from '~/shared/hooks';
import { TIME } from '~/shared/lib/const';
import type { SelectOptions } from '~/shared/types';

const asyncComponents = {
  LoadingIndicator: (
    props: LoadingIndicatorProps<SelectOptions, false, GroupBase<SelectOptions>>,
  ) => {
    return (
      <chakraComponents.LoadingIndicator
        color="blue.500"
        emptyColor="blue.100"
        speed="750ms"
        spinnerSize="md"
        thickness="3px"
        {...props}
      />
    );
  },
};

interface SearchSelectProps {
  selectedItems: SelectOptions[];
  setSelectedItems: (selectedItems: SelectOptions[]) => void;
  isSearchFilter?: boolean;
}

export const SearchSelect = ({ selectedItems, setSelectedItems }: SearchSelectProps) => {
  const toast = useToast();
  const { storageApi } = useApi();
  const [unSelectedItems, setUnSelectedItems] = useState<SelectOptions[]>([]);

  let params: GetSkillsParameters = {
    // query: searchValue,
    exclude_id: selectedItems.map((item) => item.value),
    per_page: 10,
  };

  const { data, refetch } = useQuery({
    queryKey: ['skills', params],
    queryFn: () => storageApi.getSkills(params),
    onError: (e: Error) => {
      toast({
        title: 'Ошибка получения навыков',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [selectedItems]);

  useEffect(() => {
    if (data) {
      const formatSelectedItems = selectedItems.map(({ value }) => value);
      const formatUnSelectedItem = data.filter(
        ({ value }) => !formatSelectedItems.includes(value),
      );
      setUnSelectedItems(formatUnSelectedItem);
    }
  }, [data]);

  const unSelectValue = (id: string) => {
    const unSelectedItem = selectedItems.find((item) => item.value === id);
    if (unSelectedItem) {
      const newItems = selectedItems.filter((item) => item.value !== id);
      setSelectedItems(newItems);
      setUnSelectedItems((unSelectedItems) => [...unSelectedItems, unSelectedItem]);
    }
  };

  const getOptions = debounce(
    async (
      value: string,
      callback: (
        options: OptionsOrGroups<SelectOptions, GroupBase<SelectOptions>>,
      ) => void,
    ) => {
      params = { ...params, query: value };
      await refetch().then((response) => {
        callback(response.data ?? []);
      });
    },
    TIME.DEBOUNCE,
  );

  return (
    <>
      <AsyncSelect<SelectOptions, false, GroupBase<SelectOptions>>
        placeholder="Например, Python"
        size="md"
        useBasicStyles
        noOptionsMessage={() => 'Ничего не найдено'}
        loadingMessage={() => 'Загрузка...'}
        components={asyncComponents}
        defaultOptions={unSelectedItems}
        value={null}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        loadOptions={getOptions}
        onChange={(item) => {
          if (item) {
            setSelectedItems([...selectedItems, item]);
            setUnSelectedItems((unSelectedItems) =>
              unSelectedItems.filter(
                (unSelectedItem) => unSelectedItem.value !== item.value,
              ),
            );
          }
        }}
        chakraStyles={{
          control: (provided) => ({
            ...provided,
            borderRadius: 'full',
            bg: 'white',
          }),
        }}
      />
      <Flex flexWrap="wrap" gap={2} mt={3}>
        {selectedItems.map(({ label, value }) => (
          <Tag
            key={value}
            size="sm"
            bg="gray.300"
            py={1}
            px={2}
            borderRadius="lg"
            fontWeight="medium"
          >
            <TagLabel>{label}</TagLabel>
            <IconButton
              onClick={() => {
                unSelectValue(value);
              }}
              aria-label="Close"
              variant="ghost"
              flexShrink="0"
              minW="none"
              height="none"
              fontWeight="normal"
              icon={<SmallCloseIcon />}
            />
          </Tag>
        ))}
      </Flex>
    </>
  );
};
