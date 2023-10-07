import { SearchIcon } from '@chakra-ui/icons';
import { Flex, FormControl, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface ISearchInput {
  placeholder?: string;
  value?: string;
  onSubmit: (value: IInput) => void;
}

export interface IInput {
  title: string;
}

export const SearchInput = ({ placeholder, onSubmit }: ISearchInput) => {
  const { handleSubmit, register } = useForm<IInput>();

  const onSubmitHandler = (values: IInput) => {
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
            <InputLeftElement w="2.25rem" h="2.25rem" pointerEvents="none">
              <SearchIcon color="gray.400" w="1rem" h="1rem" />
            </InputLeftElement>
            <Input
              variant="unstyled"
              p="0.625rem 0 0.625rem 2.5rem"
              borderRadius="1.25rem"
              height="2.25rem"
              color="gray.900"
              _placeholder={{ color: 'gray.400' }}
              background="white"
              placeholder={placeholder}
              {...register('title')}
            />
            {/* <InputRightElement width="6rem">
              <Button
                w="full"
                borderRadius="base"
                isLoading={isSubmitting || isLoading}
                type="submit"
              >
                {nameAction}
              </Button>
            </InputRightElement> */}
          </InputGroup>
        </FormControl>
      </Flex>
    </form>
  );
};
