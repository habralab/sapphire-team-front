import { SearchIcon } from '@chakra-ui/icons';
import { Flex, FormControl, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { IInput, ISearchInput } from '~/shared/types/SearchInput';

export const SearchInputForm = ({ placeholder, onSubmit, activeInput }: ISearchInput) => {
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
            <InputLeftElement w="36px" h="36px" pointerEvents="none">
              <SearchIcon color="gray.400" w="16px" h="16px" />
            </InputLeftElement>
            <Input
              fontSize={{
                base: 'sm',
                sm: '2xl',
                md: '4xl',
              }}
              onFocus={() => {
                activeInput(true);
              }}
              variant="unstyled"
              pl="40px"
              borderRadius="20px"
              height="36px"
              color="gray.900"
              _placeholder={{ color: 'gray.400' }}
              background="white"
              py={'10px'}
              placeholder={placeholder}
              sx={{
                caretColor: '#BDBDBD',
              }}
              {...register('title', {
                onBlur: () => {
                  activeInput(false);
                },
              })}
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
