import { Tag, Flex } from '@chakra-ui/react';

import { SText } from '../SText';

interface TagType {
  mainTags?: string[];
  tags?: string[];
}

export function STag(props: TagType) {
  const { tags, mainTags } = props;

  return (
    <Flex
      direction={mainTags && !tags ? 'column' : 'row'}
      align={mainTags && 'start'}
      wrap="wrap"
      gap={2}
    >
      {mainTags?.map((tag) => (
        <Tag key={tag} bg="gray.900" py={1} px={2} borderRadius="lg">
          <SText color="white" as="h3">
            {tag}
          </SText>
        </Tag>
      ))}
      {tags?.map((tag) => (
        <Tag
          key={tag}
          bg={'gray.100'}
          py={1}
          px={2}
          borderRadius="lg"
          fontWeight="medium"
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
