import { Tag } from '@chakra-ui/react';

interface ITag {
  tag: string;
}

export const ProjectTag = (props: ITag) => {
  return (
    <Tag
      minW={'none'}
      fontSize={{
        base: 'sm',
        sm: 'lg',
        md: 'xl',
      }}
      fontWeight={600}
      color={'gray.800'}
      borderRadius={'8px'}
      p={'4px 16px'}
    >
      {props.tag}
    </Tag>
  );
};
