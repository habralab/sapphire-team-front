import { Tag, Flex } from '@chakra-ui/react';

import { SText } from '../SText';

interface TagType {
  mainTag?: string[];
  tags?: string[];
}

export function STag(props: TagType) {
  const { tags, mainTag } = props;

  return (
    <Flex direction={mainTag && 'column'} align={mainTag && 'start'} wrap="wrap" gap={2}>
      {mainTag?.map((tag) => (
        <Tag key={tag} bg="gray.900" py={1} px={4}>
          <SText color="white" as="h3">
            {tag}
          </SText>
        </Tag>
      ))}
      {tags?.map((tag) => (
        <Tag key={tag} bg={'gray.100'} py={1} px={4} fontWeight="medium">
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
