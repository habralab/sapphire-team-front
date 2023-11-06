import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Img,
  Image,
  Avatar,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { Status } from '~/features/project';
import { Rating } from '~/features/user';

import { Card } from '~/entities/project';

import { GoBack } from '~/shared/ui/GoBack';
import { STag } from '~/shared/ui/STag';

const dummyData = [
  {
    id: '1',
    status: 'Проект идёт',
    title: 'Сервис онлайн-образования',
    date: 'с 25 сентября 2023',
    description:
      'EduNest — это проект, который предлагает онлайн-образование для студентов всех возрастов и уровней. Мы стремимся предоставить высококачественное образование, доступное каждому, независимо от их местоположения или финансового положения.Наша миссия - помочь людям раскрыть свой потенциал и достичь успеха в жизни.',
    mainTags: ['Фронтенд разработчик'],
    tags: ['TypeScript', 'Vue', 'Webpack'],
  },
];

export const ProjectPage = () => {
  return (
    <Container maxW="md" display="flex" flexDirection="column">
      <Flex
        position="sticky"
        bg="bg"
        zIndex={3}
        top={0}
        alignItems="center"
        justifyContent="space-between"
        py={4}
      >
        <Flex alignItems="center">
          <GoBack />
          <Heading variant="h2" mb={0}>
            Проект
          </Heading>
        </Flex>
      </Flex>
      <ChakraCard
        bg="white"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="none"
        alignContent="center"
      >
        <Image
          src="https://img.freepik.com/premium-photo/programmer-working-computer-office_229060-14.jpg"
          height={32}
          objectFit="cover"
        />
        <CardBody padding={['5', '6']}>
          <Stack gap={0} mb={3} alignItems="start">
            <Status mb={['3', '4']}>{dummyData[0].status}</Status>
            <Card
              title={dummyData[0].title}
              date={dummyData[0].date}
              description={dummyData[0].description}
            />
          </Stack>
          <Stack gap={0} mb={6}>
            <Heading variant="h2">В проект требуются</Heading>
            <STag mainTags={dummyData[0].mainTags} tags={dummyData[0].tags} />
          </Stack>
          <Heading variant="h2">Контакты</Heading>
          <Flex alignItems="flex-start">
            <Avatar src="" name="Полина Котова" />
            <Stack pl={2} gap={0}>
              <Heading variant="h3">Полина Котова</Heading>
              <Text variant="caption">Организатор</Text>
            </Stack>
            <Flex ml="auto">
              <Rating />
            </Flex>
          </Flex>
        </CardBody>
      </ChakraCard>
      <Flex bg="bg" position="sticky" bottom="4.6rem" p={0} py={3} mt="auto">
        <Button
          type="button"
          onClick={() => {
            // handleTabsChange(1);
          }}
          fontSize="sm"
          fontWeight="600"
          w="full"
        >
          Откликнуться
        </Button>
      </Flex>
    </Container>
  );
};
