import { IconButton, Icon, Stack, Flex, Heading } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { NotificationList } from '~/widgets/notification-list';

export function NotificationPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Stack spacing={0}>
      <Flex alignItems="center" mb={8} gap={4}>
        <IconButton
          aria-label="back"
          icon={<Icon as={FiChevronLeft} />}
          variant="flat"
          onClick={goBack}
          minW={6}
          h={6}
        />
        <Heading variant="h2" as="h1" mb={0}>
          Уведомления
        </Heading>
      </Flex>
      <NotificationList />
    </Stack>
  );
}
