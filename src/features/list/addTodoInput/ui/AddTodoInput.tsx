import { Button, Input, InputGroup } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useTodos } from '~/shared/store/store';

export const AddTodoInput = () => {
  const [value, setValue] = useState('');
  const { addTodo } = useTodos();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <InputGroup
      size="lg"
      gap="5"
      flexDirection={{
        base: 'column',
        md: 'row',
        xl: 'row',
      }}
    >
      <Input
        focusBorderColor="white"
        placeholder="Новое дело"
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        value={value}
        onChange={handleChange}
      />
      <Button
        borderRadius="5"
        p="5"
        size="lg"
        color="gray.400"
        bg="white"
        onClick={() => {
          addTodo(value);
          setValue('');
        }}
      >
        Добавить
      </Button>
    </InputGroup>
  );
};
