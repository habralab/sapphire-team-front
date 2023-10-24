import { Tag, Flex, Text } from '@chakra-ui/react';

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
          <Text color="white" as="h3">
            {tag}
          </Text>
        </Tag>
      ))}
      {tags?.map((tag) => (
        <Tag key={tag} bg={'gray.300'} py={1} px={2} borderRadius="lg">
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
