import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useTodos } from '~/shared/store/store';

interface EditableInputProps {
  id: number;
  value: string;
}

export const MyEditableInput = (props: EditableInputProps) => {
  const { id, value } = props;
  const [editValue, setEditValue] = useState('');
  const { updateTodo } = useTodos();

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const handleUpdateItem = () => {
    updateTodo(id, 'text', editValue);
  };
  return (
    <Editable defaultValue={value} onSubmit={handleUpdateItem}>
      <EditablePreview />
      <EditableInput value={editValue} onChange={handleEditChange} />
    </Editable>
  );
};
