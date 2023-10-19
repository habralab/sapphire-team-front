import { SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tag, TagLabel } from '@chakra-ui/react';

import { useSpecsFilterStore } from '~/shared/store';

interface SpecializationBagesProps {
  delete: (title: string, name: string) => void;
}

export const SpecializationBages = (props: SpecializationBagesProps) => {
  const specs = useSpecsFilterStore((state) => state.specs);
  return (
    <Flex flexWrap="wrap" gap={2}>
      {specs
        .flatMap(({ child, title }) => {
          const selector = child.flatMap(({ state, name }) => {
            if (state) {
              return [{ name, state, title }];
            } else {
              return [];
            }
          });
          return selector;
        })
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
                props.delete(selector.title, selector.name);
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
