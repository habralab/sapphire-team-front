import { SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tag, TagLabel } from '@chakra-ui/react';
import {
  AsyncSelect,
  GroupBase,
  LoadingIndicatorProps,
  OptionBase,
  chakraComponents,
} from 'chakra-react-select';
import { useEffect, useState } from 'react';

interface SelectOptions extends OptionBase {
  label: string;
  value: string;
}

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

const items = [
  { label: 'Figma', value: '1' },
  { label: 'UX', value: '2' },
  { label: 'UI', value: '3' },
  { label: 'Adobe Photoshop', value: '4' },
  { label: 'Дизайн интерфейсов', value: '5' },
  { label: 'Adobe Illustrator', value: '6' },
  { label: 'Web-дизайн', value: '7' },
  { label: 'Прототипирование', value: '8' },
  { label: 'Графический дизайн', value: '9' },
  { label: 'HTML', value: '10' },
  { label: 'CSS', value: '11' },
  { label: 'Sketch', value: '12' },
  { label: 'Tilda', value: '13' },
  { label: 'Adobe after effect', value: '14' },
  { label: 'Новое 1', value: '15' },
  { label: 'Новое 2', value: '16' },
  { label: 'Новое 3', value: '17' },
  { label: 'Новое 4', value: '18' },
  { label: 'Новое 5', value: '19' },
];

interface SearchSelectProps {
  selectedItems: SelectOptions[];
  setSelectedItems: (selectedItems: SelectOptions[]) => void;
}

export const SearchSelect = ({ selectedItems, setSelectedItems }: SearchSelectProps) => {
  const [unSelectedItems, setUnSelectedItems] =
    useState<{ value: string; label: string }[]>(items);

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
