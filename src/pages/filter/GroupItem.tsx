import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
} from '@chakra-ui/react';

import { SpecsGroups } from './SpecsGroups';

interface GroupItemProps {
  name: string | null;
  id: string;
}

export const GroupItem = ({ name, id }: GroupItemProps) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton justifyContent="space-between">
            <Flex gap={2} fontSize="sm" textAlign="left" alignItems="center">
              <Heading fontSize="md" fontWeight="medium">
                {name}
              </Heading>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={3}>{isExpanded && <SpecsGroups id={id} />}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
