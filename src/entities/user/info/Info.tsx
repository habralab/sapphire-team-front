import { Box, Divider, Flex, FlexProps } from '@chakra-ui/react';

import { SGroup } from '~/shared/ui/SGroup';

export const Info = (props: FlexProps) => {
  return (
    <Flex py={4} px={0.5} width="100%" textAlign="center" {...props}>
      <SGroup count={3} section="Участник" />
      <Box>
        <Divider orientation="vertical" variant="light" />
      </Box>
      <SGroup count={1} section="Организатор" />
      <Box>
        <Divider orientation="vertical" variant="light" />
      </Box>
      <SGroup count={4.89} section="Рейтинг" />
    </Flex>
  );
};
