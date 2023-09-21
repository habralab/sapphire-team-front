import { Checkbox } from '@chakra-ui/react';

import { useTodos } from '~/shared/store/store';

interface CheckboxProps {
  id: number;
  status: string;
}

export const MyCheckbox = (props: CheckboxProps) => {
  const { id, status } = props;
  console.log(status);

  const { updateTodo } = useTodos();
  return (
    <Checkbox
      isChecked={status === 'done'}
      onChange={() => {
        updateTodo(id, 'status', status);
      }}
    />
  );
};
