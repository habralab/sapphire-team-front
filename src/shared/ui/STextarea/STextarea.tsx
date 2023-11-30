import { Flex, Text, Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface STextareaProps {
  maxLength: number;
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
    <Flex flexDirection="column" alignItems="end">
      <Textarea
        background="white"
        placeholder={placeholder}
        isInvalid={isInvalid}
        value={value}
        onChange={handleInputChange}
        resize="none"
        mb={2}
      />
      <Text color="gray.500">
        {value.length}/{maxLength}
      </Text>
    </Flex>
  );
}
