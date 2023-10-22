import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';

interface SearchInputProps {
  placeholder?: string;
  inputColor?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, onChange, value, inputColor }: SearchInputProps, ref) => {
    return (
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" fontSize="md" />
        </InputLeftElement>
        <Input
          ref={ref}
          variant="outline"
          _hover={{
            borderColor: 'blue.500',
          }}
          borderRadius="full"
          _placeholder={{ color: 'gray.400' }}
          background={inputColor ?? 'white'}
          placeholder={placeholder}
          value={value}
          onBlur={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        {value && (
          <InputRightElement>
            <IconButton
              onClick={() => {
                onChange('');
              }}
              color="gray.400"
              variant="ghost"
              aria-label="Close"
              icon={<CloseIcon fontSize="sm" />}
            />
          </InputRightElement>
        )}
      </InputGroup>
    );
  },
);

SearchInput.displayName = 'SearchInput';
