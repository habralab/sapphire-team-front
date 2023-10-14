import { Heading, Text } from '@chakra-ui/react';

import { SLink } from '~/shared/ui/SLink';

export const NotFoundPage = () => {
  return (
    <>
      <Heading variant="h1" as="h1" mb={4}>
        404
      </Heading>
      <Text>
        Страница не найдена, <SLink to="/">перейти на главную</SLink>
      </Text>
    </>
  );
};
