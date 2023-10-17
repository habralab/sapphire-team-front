import {
  IconButton,
  Icon,
  Stack,
  Flex,
  Heading,
  Portal,
  Container,
  Divider,
} from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { NotificationList } from '~/widgets/notification-list';

import { useLayoutRefs } from '~/shared/hooks';

export function NotificationPage() {
  const navigate = useNavigate();
  const layout = useLayoutRefs();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Stack spacing={0}>
      {layout?.header && (
        <Portal containerRef={layout.header}>
          <Container pos="relative">
            <Flex alignItems="center" my={4} gap={4}>
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
            <Divider variant="light" position="absolute" left={0} right={0} />
          </Container>
        </Portal>
      )}
      <NotificationList />
    </Stack>
  );
}
