import {
  Avatar,
  AvatarGroup,
  CardBody,
  Card as ChakraCard,
  Flex,
} from '@chakra-ui/react';

import { Status } from '~/features/project';

import { AvatarsGroup, Card } from '~/entities/project';
// import { Avatar } from '~/entities/user';

import { STag } from '~/shared/ui/STag';

interface ProjectCardProps {
  id: number;
  status: string;
  title: string;
  date: string;
  description: string;
  mainTags: string[];
  tags?: string[];
  page?: 'search' | 'project';
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, page, mainTags, tags } = props;
  const dummyAvatars = [
    { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
    { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
    { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
    { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
    { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
    { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
  ];
  return (
    <ChakraCard
      borderRadius="2xl"
      _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      mb={[4, 0]}
    >
      <CardBody padding={['5', '6']}>
        <Status mb={['3', '4']}>{status}</Status>
        <Card title={title} date={date} description={description} />
        {page === 'search' && <STag mainTags={mainTags} tags={tags} />}
        {page === 'project' && (
          <Flex justifyContent="space-between" alignItems="center">
            <STag mainTags={['Организатор']} />
            <AvatarsGroup avatars={dummyAvatars} />
          </Flex>
        )}
      </CardBody>
    </ChakraCard>
  );
};
