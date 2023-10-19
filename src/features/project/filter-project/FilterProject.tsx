import { Icon, IconButton, Text } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import {
  useFilterStore,
  useSkillsFilterStore,
  useSpecsFilterStore,
} from '~/shared/store';
import { Counter } from '~/shared/ui/Counter';

export const FilterProject = () => {
  const isMobile = useIsMobile();
  const setFilterStatus = useFilterStore((state) => state.setFilterStatus);
  const setCountSpecs = useSpecsFilterStore((state) => state.setCount);
  const setCountSkills = useSkillsFilterStore((state) => state.setCount);
  const count = setCountSpecs() + setCountSkills();

  return (
    <>
      <IconButton
        onClick={() => {
          setFilterStatus(true);
        }}
        aria-label="filter"
        flexShrink="0"
        gap={2}
        padding={['0', '0', '4']}
        fontWeight="normal"
        icon={
          <>
            <Text hidden={isMobile}>Все фильтры</Text>
            <Icon as={IoOptions} />
            {count > 0 && <Counter count={count} float />}
          </>
        }
      ></IconButton>
    </>
  );
};
