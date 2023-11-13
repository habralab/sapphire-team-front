import {
  Flex,
  Button,
  Heading,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AboutProject, Inputs, NewSpecialist, Team } from '~/features/project';

import { NewProjectParams } from '~/shared/api';
import { useAuth } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';

import { AddProjectApi } from '../api/AddProjectApi';

export const AddProjectPage = () => {
  const [newSpecialist, setNewSpecialist] = useState<NewSpecialist[]>([]);
  const [description, setDescription] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields, isValid },
  } = useForm<Inputs>({ mode: 'all' });
  const { userId, isAuth } = useAuth();

  const {
    addProject,
    loadingAddProject,
    loadingPositionCreate,
    loadingUpdateAvatar,
    loadingUpdateSkill,
  } = AddProjectApi({
    newSpecialist,
    dirtyFields,
    watch,
  });

  const form = { register, errors, dirtyFields };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userId) {
      const newProject: NewProjectParams = {
        name: data.title,
        description,
        deadline: new Date(data.date).toISOString().slice(0, -1),
        owner_id: userId,
      };
      addProject(newProject);
    }
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

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
            Создать проект
          </Heading>
        </Flex>
        <Button variant="flat" fontSize="xs" fontWeight="500" colorScheme="purple">
          Сохранить и выйти
        </Button>
      </Flex>
      <Tabs variant="base" index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>О проекте</Tab>
          <Tab>Команда</Tab>
        </TabList>
        <form id="addNewProjectForm" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TabPanels>
            <TabPanel>
              <AboutProject
                form={form}
                description={description}
                setDescription={setDescription}
              />
            </TabPanel>
            <TabPanel>
              <Team newSpecialist={newSpecialist} setNewSpecialist={setNewSpecialist} />
            </TabPanel>
          </TabPanels>
        </form>
      </Tabs>
      <Flex bg="bg" position="sticky" bottom="4.6rem" p={0} py={3} mt="auto">
        {tabIndex === 0 && (
          <Button
            type="button"
            onClick={() => {
              handleTabsChange(1);
            }}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Продолжить
          </Button>
        )}
        {tabIndex === 1 && (
          <Button
            isLoading={
              loadingAddProject ||
              loadingPositionCreate ||
              loadingUpdateAvatar ||
              loadingUpdateSkill
            }
            isDisabled={!isValid || !description || !newSpecialist.length}
            type="submit"
            form="addNewProjectForm"
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Опубликовать
          </Button>
        )}
      </Flex>
    </Container>
  );
};
