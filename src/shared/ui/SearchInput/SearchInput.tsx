import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface SearchInputProps {
  placeholder?: string;
  onSubmit: (value: InputProps) => void;
}

export interface InputProps {
  title: string;
}

export const SearchInput = ({ placeholder, onSubmit }: SearchInputProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { dirtyFields },
  } = useForm<InputProps>();

  const onSubmitHandler = (values: InputProps) => {
    onSubmit(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      style={{
        width: '100%',
      }}
    >
      <Flex>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" w={4} h={4} />
            </InputLeftElement>
            <Input
              variant="outline"
              borderRadius="full"
              _placeholder={{ color: 'gray.400' }}
              background="white"
              placeholder={placeholder}
              {...register('title')}
            />
            {dirtyFields.title && (
              <InputRightElement>
                <IconButton
                  onClick={() => {
                    reset();
                  }}
                  color="gray.400"
                  variant="ghost"
                  aria-label="Close"
                  icon={<CloseIcon w={4} h={4} />}
                />
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </Flex>
    </form>
  );
};
