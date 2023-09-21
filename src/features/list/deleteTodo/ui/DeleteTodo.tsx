import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

import { useTodos } from '~/shared/store/store';

interface DeleteTodoProps {
  id: number;
}

export const DeleteTodo = (props: DeleteTodoProps) => {
  const { id } = props;
  const { removeTodo } = useTodos();
  return (
    <IconButton
      m="0 0 0 auto"
      onClick={() => {
        removeTodo(id);
      }}
      borderRadius="7"
      size="sm"
      variant="outline"
      colorScheme="facebook"
      aria-label="Delete task"
      fontSize="20px"
      icon={<DeleteIcon />}
    />
  );
};
