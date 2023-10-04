import { Box as StatusTag, CardBody, Card as ChakraCard, Flex } from '@chakra-ui/react';

import { IProjectCard } from '~/widgets/project-card';

import { Card, ProjectTag } from '~/entities/project-card';

export const ProjectCard = (props: IProjectCard) => {
  const { status, title, date, description, type, tags } = props;
  return (
    <ChakraCard variant="sapphire" alignContent={'center'}>
      <CardBody
        display="flex"
        padding={'16px 16px 0px 16px'}
        flexDirection="column"
        gap={'0.75rem'}
      >
        <StatusTag
          background={status === 'Проект завершён' ? 'gray.500' : 'purple.600'}
          fontSize={{
            base: 'es',
            sm: 'lg',
            md: 'xl',
          }}
          fontWeight={600}
          lineHeight="7px"
          color={'white'}
          width={'fit-content'}
          p={'6px 10px'}
          borderRadius={'20px'}
        >
          {status}
        </StatusTag>
        <Card title={title} date={date} description={description} />
      </CardBody>
      {type === 'all' && (
        <Flex
          overflowX={'auto'}
          p={'0.75rem 16px 16px 16px'}
          gap={2}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {tags?.map((tag) => <ProjectTag key={tag} tag={tag} />)}
        </Flex>
      )}
    </ChakraCard>
  );
};
