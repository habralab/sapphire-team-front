import { Tag, Flex } from '@chakra-ui/react';

interface TagType {
  mainTag?: string;
  tagArr: string[];
}

export function STag(props: TagType) {
  const { tagArr, mainTag } = props;

  return (
    <Flex wrap="wrap" gap={2} fontWeight="semibold">
      {mainTag && (
        <Tag bg="gray.900" color="white" py={1} px={4}>
          {mainTag}
        </Tag>
      )}
      {tagArr.map((tag, i) => (
        <Tag key={tagArr[i]} bg={'gray.100'} py={1} px={4}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
