import { Flex, Heading } from '@chakra-ui/react';

import {
  AddTodoInput,
  DeleteTodo,
  FilterTodo,
  MyCheckbox,
  MyEditableInput,
} from '~/features/list';

import { List } from '~/entities/list';

export const ToDo = () => {
  return (
    <Flex
      flexWrap="wrap"
      mt="3"
      gap="5"
      justifyContent="space-evenly"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        boxShadow="xs"
        p="6"
        gap="5"
        rounded="md"
        bg="gray.400"
        color="white"
      >
        <Heading as="h3" size="xl" mb="3">
          ToDo
        </Heading>
        <AddTodoInput />
        <List
          MyCheckbox={MyCheckbox}
          MyEditableInput={MyEditableInput}
          MyIconDeleteButton={DeleteTodo}
        />
        <FilterTodo />
      </Flex>
    </Flex>
  );
};
