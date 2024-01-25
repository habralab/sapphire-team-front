import { Checkbox, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { useFilterStore } from '~/entities/project';

interface SpecItemProps {
  id: string;
  name: string | null;
  tempSpec: string[];
}

export const SpecItem = ({ id, name, tempSpec }: SpecItemProps) => {
  const [_, setCheckboxChange] = useState(false);

  const changeValue = () => {
    if (tempSpec.includes(id)) {
      const existingId = tempSpec.indexOf(id);
      tempSpec.splice(existingId, 1);
      setCheckboxChange((prev) => !prev);
      console.log(tempSpec);
      return;
    }
    setCheckboxChange((prev) => !prev);
    tempSpec.push(id);
    console.log(tempSpec);
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
