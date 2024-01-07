import { Checkbox, Text } from '@chakra-ui/react';

interface SpecItemProps {
  id: string;
  name: string | null;
}

export const SpecItem = ({ id, name }: SpecItemProps) => {
  return (
    <Checkbox p={4} w="full" py={2} value={id}>
      <Text fontWeight="medium" fontSize="sm">
        {name}
      </Text>
    </Checkbox>
  );
};
