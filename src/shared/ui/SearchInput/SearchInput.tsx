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
  const { handleSubmit, register, reset, watch } = useForm<InputProps>({
    defaultValues: {
      title: '',
    },
  });

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
            <InputLeftElement w={9} h={9} pointerEvents="none">
              <SearchIcon color="gray.400" w={4} h={4} />
            </InputLeftElement>
            <Input
              variant="unstyled"
              py={2.5}
              px={10}
              borderRadius="1.25rem"
              height={9}
              color="gray.900"
              _placeholder={{ color: 'gray.400' }}
              background="white"
              placeholder={placeholder}
              {...register('title')}
            />
            {watch('title').trim() && (
              <InputRightElement w={9} h={9}>
                <IconButton
                  onClick={() => {
                    reset();
                  }}
                  variant="unstyled"
                  h={9}
                  color="gray.400"
                  aria-label="Close"
                  fontSize="sm"
                  lineHeight="0"
                  icon={<CloseIcon />}
                />
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </Flex>
    </form>
  );
};
