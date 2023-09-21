import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { useTodos } from '~/shared/store/store';

interface CheckboxProps {
  id: number;
  status: string;
}

interface EditableInputProps {
  id: number;
  value: string;
}

interface DeleteTodoProps {
  id: number;
}

interface ListProps {
  MyCheckbox: FC<CheckboxProps>;
  MyEditableInput: FC<EditableInputProps>;
  MyIconDeleteButton: FC<DeleteTodoProps>;
}

export const List = (props: ListProps) => {
  const { MyEditableInput, MyIconDeleteButton, MyCheckbox } = props;
  const { fiteredTodos } = useTodos();

  return (
    <Flex flexDirection="column" gap="2">
      {fiteredTodos.map(({ id, value, status }) => (
        <Flex key={id} gap="3" alignItems="center">
          <MyCheckbox id={id} status={status} />
          {status === 'active' ? (
            <MyEditableInput id={id} value={value} />
          ) : (
            <Box mb="0">
              <s>{value}</s>
            </Box>
          )}
          <MyIconDeleteButton id={id} />
        </Flex>
      ))}
    </Flex>
  );
};
