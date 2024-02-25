import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Counter } from '~/shared/ui/Counter';

import { SpecsGroups } from './SpecsGroups';

interface GroupItemProps {
  name: string | null;
  id: string;
  allSpecs: {
    id: string;
    name: string | null;
    group_id: string | null;
    created_at: string;
  }[];
  tempSpec: string[];
  singleChecked?: boolean;
  doubleChecked?: boolean;
}

export const GroupItem = ({
  name,
  id,
  tempSpec,
  allSpecs,
  singleChecked,
  doubleChecked,
}: GroupItemProps) => {
  const [_, setCheckboxChange] = useState(false);
  const getCurrentSpecs = (id: string) => {
    return allSpecs.filter(({ group_id }) => group_id === id);
  };

  const currentCount = allSpecs.filter(
    (spec) => spec.group_id === id && tempSpec.includes(spec.id),
  ).length;

  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton justifyContent="space-between">
            <Flex gap={2} fontSize="sm" textAlign="left" alignItems="center">
              <Heading fontSize="md" fontWeight="medium">
                {name}
              </Heading>
              {currentCount > 0 && <Counter count={currentCount} />}
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={3}>
            {isExpanded && (
              <SpecsGroups
                id={id}
                tempSpec={tempSpec}
                currentSpecs={getCurrentSpecs(id)}
                updateCounter={setCheckboxChange}
                singleChecked={singleChecked}
                doubleChecked={doubleChecked}
              />
            )}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
