/* eslint-disable @typescript-eslint/no-floating-promises */
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
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AboutProject, Inputs, NewSpecialist, Team } from '~/features/project';

import {
  NewProjectParams,
  UpdateProjectAvatar,
  UpdateProjectAvatarID,
} from '~/shared/api';
import { useApi, useAuth } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';

interface newPosition {
  project_id: string;
  specialization_id: string;
}

interface updateSkills {
  project_id: string;
  postiton_id: string;
  skills: string[];
}

export const AddProjectPage = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { projectsApi } = useApi();
  const [newSpecialist, setNewSpecialist] = useState<NewSpecialist[]>([]);
  const [description, setDescription] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<Inputs>({ mode: 'all' });
  const { userId, isAuth } = useAuth();

  const form = { register, errors, dirtyFields };

  const { mutate: updateSkillsMutate, isLoading: updateSkillsLoading } = useMutation({
    mutationFn: (updateSkills: updateSkills) => {
      const { project_id, postiton_id, skills } = updateSkills;
      return projectsApi.updateSkills(project_id, postiton_id, skills);
    },
    onSuccess: () => {
      console.log('Все успешно!');
      queryClient.invalidateQueries(['getAllProjects']);
      navigate(-1);
    },
    onError: (e: Error) => {
      toast({
        title: 'Ошибка добавления навыков',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const { mutate: createPositionMutate, isLoading: createPositionMutateLoading } =
    useMutation({
      mutationFn: (newPos: newPosition) => {
        const { project_id, ...rest } = newPos;
        return projectsApi.createPosition(project_id, rest);
      },
      onSuccess: (data) => {
        newSpecialist.forEach(({ spec, skills }) => {
          if (spec === data.specialization_id) {
            const formatSkills = skills.map(({ value }) => value);
            const updateSkills: updateSkills = {
              project_id: data.project_id,
              postiton_id: data.id,
              skills: formatSkills,
            };
            updateSkillsMutate(updateSkills);
          }
        });
      },
      onError: (e: Error) => {
        toast({
          title: 'Ошибка добавления позиции',
          description: e.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: NewProjectParams) => projectsApi.addNewProject(data),
    onSuccess: (data) => {
      newSpecialist.forEach(({ spec }) => {
        const newPosition: newPosition = {
          project_id: data.id,
          specialization_id: spec,
        };
        createPositionMutate(newPosition);
      });
    },
    onError: (e: Error) => {
      toast({
        title: 'Ошибка создания проекта',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const { mutate: uploadProjectAvatar } = useMutation({
    mutationFn: (data: UpdateProjectAvatarID & UpdateProjectAvatar) =>
      projectsApi.uploadProjectAvatar(data),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userId) {
      const newProject: NewProjectParams = {
        name: data.title,
        description,
        deadline: new Date(data.date).toISOString().slice(0, -1),
        owner_id: userId,
      };
      mutate(newProject);
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
            isLoading={isLoading || createPositionMutateLoading || updateSkillsLoading}
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
