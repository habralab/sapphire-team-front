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
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  AboutProject,
  AddProjectForm,
  Team,
  useAddAvatar,
  useAddPosition,
  useAddProject,
  useAddSkills,
} from '~/features/project';

import { useAuth } from '~/shared/hooks';
import { formatDate } from '~/shared/lib/dateFormatter';
import { GoBack } from '~/shared/ui/GoBack';

export const AddProjectPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: addProject } = useAddProject();
  const { mutateAsync: addPosition } = useAddPosition();
  const { mutateAsync: updateSkills } = useAddSkills();
  const { mutateAsync: uploadAvatar } = useAddAvatar();
  const [tabIndex, setTabIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const toast = useToast();
  const form = useForm<AddProjectForm>({ defaultValues: { team: [] } });
  const { userId } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<AddProjectForm> = async (data) => {
    if (userId) {
      try {
        setIsAdding(true);
        const newProject = await addProject({
          name: data.title,
          description: data.description,
          startline: formatDate(data.startDate),
          deadline: formatDate(data.deadlineDate),
          owner_id: userId,
        });

        if (data.attachFile.length) {
          await uploadAvatar({ project_id: newProject.id, avatar: data.attachFile[0] });
        }

        const newPositions = data.team.map(({ spec }) =>
          addPosition({
            project_id: newProject.id,
            position: { specialization_id: spec },
          }),
        );
        const allProjectPosition = await Promise.all(newPositions);

        const updatedSkills = allProjectPosition.map(({ project_id, id }, i) => {
          const formatSkills = data.team[i].skills.map(({ value }) => value);
          return updateSkills({
            project_id,
            positon_id: id,
            skills: formatSkills,
          });
        });
        await Promise.all(updatedSkills);

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
        <Button variant="flat" fontSize="xs" fontWeight="500" colorScheme="purple">
          Сохранить и выйти
        </Button>
      </Flex>
      <Tabs variant="base" index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>О проекте</Tab>
          <Tab>Команда</Tab>
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
