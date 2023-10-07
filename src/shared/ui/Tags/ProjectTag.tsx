import { Tag } from '@chakra-ui/react';

interface TagProps {
  tag: string;
}

export const ProjectTag = (props: TagProps) => {
  return (
    <Tag
      minW="none"
      fontSize="sm"
      fontWeight="600"
      color="gray.800"
      borderRadius="0.5rem"
      p="0.25rem 1rem"
    >
      {props.tag}
    </Tag>
  );
};
