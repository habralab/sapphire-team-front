import { Stack, Flex, Heading, Text, Circle } from '@chakra-ui/react';

import { SLink } from '~/shared/ui/SLink';

interface NotificationItemProps {
  status: string;
  project: string;
}

export function NotificationItem(props: NotificationItemProps) {
  const { status, project } = props;

  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      py={3}
      px={[5, 6]}
      _last={{ border: 'none' }}
    >
      <Flex alignItems="center" justifyContent="space-between" gap={2}>
        <Circle size="6px" bg="purple.600" />
        <Stack spacing={0} gap={1}>
          <Heading variant="h3">{status}</Heading>
          <SLink to="#">{project}</SLink>
        </Stack>
      </Flex>
      <Text variant="caption">01.08.23</Text>
    </Flex>
  );
}
