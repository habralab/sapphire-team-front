import { Tag } from '@chakra-ui/react';

interface TagType {
  title: string;
}

export function TagComponent(props: TagType) {
  const { title } = props;

  return (
    <Tag bg="gray.100" py={1} px={4}>
      {title}
    </Tag>
  );
}
