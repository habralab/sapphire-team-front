import { Flex, Text, Textarea } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';

interface STextareaProps {
  maxLength?: number;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  isInvalid?: boolean;
}

export function STextarea({
  maxLength,
  value = '',
  setValue,
  placeholder,
  isInvalid,
}: STextareaProps) {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Flex flexDirection="column" alignItems="end" w="full">
      <Textarea
        background="white"
        borderRadius="2xl"
        placeholder={placeholder}
        isInvalid={isInvalid}
        value={value}
        onChange={handleInputChange}
        resize="none"
        mb={2}
        minH={maxLength ? 20 : 9}
      />
      {maxLength && (
        <Text color="gray.500">
          {value.length}/{maxLength}
        </Text>
      )}
    </Flex>
  );
}
