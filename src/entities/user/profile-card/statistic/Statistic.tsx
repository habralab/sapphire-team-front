import { Box, Divider, Flex, type FlexProps } from '@chakra-ui/react';

import type { GetStatistic } from '~/shared/api/model';
import { useAuth } from '~/shared/hooks';
import { SGroup } from '~/shared/ui/SGroup';

interface StatisticProps {
  statistic?: GetStatistic;
}

export const Statistic = (props: FlexProps & StatisticProps) => {
  const { isAuth } = useAuth();
  const { statistic } = props;

  return (
    <Flex py={4} px={0.5} width="100%" textAlign="center" {...props}>
      <SGroup
        count={isAuth && statistic ? statistic.participant_projects_count : 0}
        section="Участник"
      />
      <Box>
        <Divider orientation="vertical" variant="light" />
      </Box>
      <SGroup
        count={isAuth && statistic ? statistic.ownership_projects_count : 0}
        section="Организатор"
      />
      {/* <Box>
        <Divider orientation="vertical" variant="light" />
      </Box> */}
      {/* <SGroup count={isAuth ? 4.89 : 0} section="Рейтинг" /> */}
    </Flex>
  );
};
