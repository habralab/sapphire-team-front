import { SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tag, TagLabel, useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import {
  AsyncSelect,
  GroupBase,
  LoadingIndicatorProps,
  chakraComponents,
} from 'chakra-react-select';
import { useEffect, useState } from 'react';

import { useApi } from '~/shared/hooks';
import { SelectOptions } from '~/shared/types';

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

  const { data } = useQuery({
    queryKey: ['skills'],
    queryFn: () => storageApi.getSkills(),
    onError: (e: Error) => {
      toast({
        title: 'Ошибка получения навыков',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
    staleTime: Infinity,
  });

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

  return (
    <>
      <AsyncSelect<SelectOptions, false, GroupBase<SelectOptions>>
        placeholder="Например, Python"
        size="md"
        useBasicStyles
        noOptionsMessage={() => 'Ничего не найдено'}
        loadingMessage={() => 'Загрузка...'}
        components={asyncComponents}
        value={null}
        defaultOptions={unSelectedItems}
        options={unSelectedItems}
        loadOptions={(inputValue, callback) => {
          setTimeout(() => {
            callback(
              unSelectedItems.filter((e) => e.label.match(new RegExp(inputValue, 'i'))),
            );
          }, 500);
        }}
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
