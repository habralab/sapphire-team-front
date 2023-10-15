import { Box, HStack, Heading, Stack, StackProps, Text } from '@chakra-ui/react';

import { SLink } from '~/shared/ui/SLink';

type ReviewType = {
  date: string;
  name: string;
  userStatus: string;
  project: string;
  review: string;
  rating: JSX.Element;
} & StackProps;

export function Reviews(props: ReviewType) {
  const { rating, date, name, project, review, userStatus, ...others } = props;

  return (
    <Stack p={5} borderRadius="2xl" bg="white" gap={3} {...others}>
      <HStack justifyContent="space-between">
        <Text variant="caption">{date}</Text>
        {rating}
      </HStack>
      <Box>
        <Heading variant="h2" mb={1}>
          {name}
        </Heading>
        <Text variant="caption" mb={1}>
          {userStatus}
        </Text>
        <SLink to="#">{project}</SLink>
      </Box>
      <Text>{review}</Text>
    </Stack>
  );
}
