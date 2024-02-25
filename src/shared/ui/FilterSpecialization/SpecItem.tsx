import { Checkbox, Text, useToast } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

interface SpecItemProps {
  id: string;
  name: string | null;
  tempSpec: string[];
  updateCounter: Dispatch<SetStateAction<boolean>>;
  singleChecked?: boolean;
  doubleChecked?: boolean;
}

export const SpecItem = ({
  id,
  name,
  tempSpec,
  updateCounter,
  singleChecked,
  doubleChecked,
}: SpecItemProps) => {
  const toast = useToast();
  const errorSelectCheckbox = (warningText: string) => {
    toast({
      title: 'Нельзя выбрать чекбокс',
      description: warningText,
      status: 'warning',
      duration: 9000,
      isClosable: true,
    });
  };

  const changeValue = () => {
    if (tempSpec.includes(id)) {
      const existingId = tempSpec.indexOf(id);
      tempSpec.splice(existingId, 1);
      updateCounter((prev) => !prev);
      return;
    }
    if (singleChecked) {
      tempSpec.length < 1
        ? (tempSpec = [id])
        : errorSelectCheckbox('Одновременно можно выбрать только одну специализацию');
    } else if (doubleChecked) {
      tempSpec.length < 2
        ? tempSpec.push(id)
        : errorSelectCheckbox('Одновременно можно выбрать только две специализации');
    } else {
      tempSpec.push(id);
    }
    updateCounter((prev) => !prev);
  };
  return (
    <Checkbox
      p={4}
      w="full"
      py={2}
      value={id}
      isChecked={tempSpec.includes(id)}
      onChange={changeValue}
    >
      <Text fontWeight="medium" fontSize="sm">
        {name}
      </Text>
    </Checkbox>
  );
};
