import { Box, Flex, Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { useFilter, useTodos } from '~/shared/store/store';

export const FilterTodo = () => {
  const { todos } = useTodos();
  const { filter, setFilter } = useFilter();
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
        xl: 'row',
      }}
      justifyContent="space-between"
    >
      <Box>{todos.filter((item) => item.status === 'active').length} осталось</Box>
      <RadioGroup onChange={setFilter} value={filter}>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
            xl: 'row',
          }}
        >
          <Radio value="all" checked>
            Все
          </Radio>
          <Radio value="active">Активные</Radio>
          <Radio value="done">Выполненные</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
