import { Box, Divider, Flex, FlexProps } from '@chakra-ui/react';

import { useAuth } from '~/shared/hooks';
import { SGroup } from '~/shared/ui/SGroup';

export const Info = (props: FlexProps) => {
  const { isAuth } = useAuth();

  return (
    <Flex py={4} px={0.5} width="100%" textAlign="center" {...props}>
      <SGroup count={isAuth ? 3 : 0} section="Участник" />
      <Box>
        <Divider orientation="vertical" variant="light" />
      </Box>
      <SGroup count={isAuth ? 1 : 0} section="Организатор" />
      <Box>
        <Divider orientation="vertical" variant="light" />
      </Box>
      <SGroup count={isAuth ? 4.89 : 0} section="Рейтинг" />
    </Flex>
  );
};
