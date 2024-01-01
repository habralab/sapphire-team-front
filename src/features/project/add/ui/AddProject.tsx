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
  Text,
  TabIndicator,
} from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  Controller,
  useForm,
  type FieldErrors,
  type SubmitHandler,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { stringToServerDate } from '~/shared/lib/adapters';
import { GoBack } from '~/shared/ui/GoBack';

import { useAddAvatar, useAddPosition, useAddProject, useAddSkills } from '../api';

import type { AddProjectForm } from './AddProject.types';
import { AboutProject, Team } from './tabs';

export const AddProject = ({ userId }: { userId: string }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync: addProject } = useAddProject();
  const { mutateAsync: addPosition } = useAddPosition();
  const { mutateAsync: updateSkills } = useAddSkills();
  const { mutateAsync: uploadAvatar } = useAddAvatar();
  const [tabIndex, setTabIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const toast = useToast();
  const form = useForm<AddProjectForm>({ defaultValues: { team: [] } });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<AddProjectForm> = async (data) => {
    try {
      setIsAdding(true);
      const newProject = await addProject({
        name: data.title,
        description: data.description,
        startline: stringToServerDate(data.startDate),
        deadline: stringToServerDate(data.deadlineDate),
        owner_id: userId,
      });

      if (data.attachFile.length) {
        await uploadAvatar({ project_id: newProject.id, avatar: data.attachFile[0] });
      }

      const newPositions = data.team.map(({ spec }) =>
        addPosition({
          project_id: newProject.id,
          specialization_id: spec,
        }),
      );
      const allProjectPosition = await Promise.all(newPositions);

      const updatedSkills = allProjectPosition.map(({ id }, i) => {
        const formatSkills = data.team[i].skills.map(({ value }) => value);
        return updateSkills({
          position_id: id,
          skills: formatSkills,
        });
      });
      await Promise.all(updatedSkills);

      queryClient.invalidateQueries(['getAllProjects']);
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: 'Ошибка создания проекта',
          description: err.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } finally {
      setIsAdding(false);
    }
  };

  const onError = (errors: FieldErrors<AddProjectForm>) => {
    if (errors.title ?? errors.description ?? errors.startDate ?? errors.deadlineDate) {
      setTabIndex(0);
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
        {/* <Button variant="flat" fontSize="xs" fontWeight="500" colorScheme="purple">
          Сохранить и выйти
        </Button> */}
      </Flex>
      <Tabs variant="animatedBase" index={tabIndex} onChange={handleTabsChange}>
        <TabList position="relative">
          <Tab>О проекте</Tab>
          <Tab>Команда</Tab>
          <TabIndicator h="86%" bg="gray.900" borderRadius="full" />
        </TabList>

        <form
          id="addNewProjectForm"
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
        >
          <TabPanels>
            <TabPanel>
              <AboutProject form={form} />
            </TabPanel>
            <TabPanel>
              <Controller
                name="team"
                rules={{
                  required: 'Необходимо добавить хотя бы одного специалиста',
                }}
                render={({ field: { value, onChange } }) => (
                  <Team newSpecialist={value} setNewSpecialist={onChange} />
                )}
                control={control}
              />
              {errors.team && <Text color="red.500">{errors.team.message}</Text>}
            </TabPanel>
          </TabPanels>
        </form>
      </Tabs>
      <Flex
        bg="bg"
        h="full"
        p={0}
        py={4}
        position={tabIndex === 1 ? 'relative' : 'static'}
        bottom={0}
        alignItems={tabIndex === 1 ? 'flex-end' : 'flex-start'}
      >
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
            isLoading={isAdding}
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
