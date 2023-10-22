import { SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tag, TagLabel } from '@chakra-ui/react';

import { useSkillsFilterStore } from '~/shared/store';

interface SkillsBagesProps {
  delete: (name: string) => void;
}

export const SkillsBages = (props: SkillsBagesProps) => {
  const skills = useSkillsFilterStore((state) => state.skills);
  return (
    <Flex flexWrap="wrap" gap={2}>
      {skills
        .filter((child) => child.state)
        .map((selector) => (
          <Tag
            key={selector.name}
            size="sm"
            bg="gray.300"
            py={1}
            px={2}
            borderRadius="lg"
            fontWeight="medium"
          >
            <TagLabel>{selector.name}</TagLabel>
            <IconButton
              onClick={() => {
                props.delete(selector.name);
              }}
              aria-label="Close"
              variant="ghost"
              flexShrink="0"
              minW="none"
              height="none"
              fontWeight="normal"
              icon={<SmallCloseIcon boxSize={4} />}
            />
          </Tag>
        ))}
    </Flex>
  );
};
