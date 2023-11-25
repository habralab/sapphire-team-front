import { Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

export function Buttons() {
  const navigate = useNavigate();

  return (
    <Stack spacing={0} gap={2} w="full">
      <Button
        type="button"
        onClick={() => {
          navigate(PATHS.addProject);
        }}
        fontSize="sm"
        fontWeight="600"
      >
        Создать свой проект
      </Button>
      <Button
        variant="light"
        type="button"
        onClick={() => {
          navigate(PATHS.search);
        }}
        fontSize="sm"
        fontWeight="600"
      >
        Найти проект
      </Button>
    </Stack>
  );
}
