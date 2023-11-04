import { IconButton, Icon, Flex, Heading, Container } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { NotificationList } from '~/widgets/notification-list';

import { notifications } from '~/shared/lib/notifications';

export function NotificationsPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" my={4} gap={4} h={42}>
        <IconButton
          aria-label="back"
          icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
          variant="flat"
          onClick={goBack}
          minW={6}
          h={6}
        />
        <Heading variant="h1" as="h1">
          Уведомления
        </Heading>
      </Flex>
      <NotificationList notifications={notifications} />
    </Container>
  );
}
