import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Flex,
  Button,
  Heading,
  Container,
  IconButton,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AboutProject, Inputs, NewSpecialist, Team } from '~/features/project';

export const AddProjectPage = () => {
  const [newSpecialist, setNewSpecialist] = useState<NewSpecialist[]>([]);
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      description: '',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('object');
    console.log(data);
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
          <IconButton
            variant="ghost"
            aria-label="projects"
            onClick={() => {
              navigate(-1);
            }}
            gap={2}
            flexShrink="0"
            padding={['0', '0', '4']}
            icon={<Icon as={ChevronLeftIcon} fontSize="2xl" />}
          />
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
        <form noValidate>
          <TabPanels>
            <TabPanel>
              <AboutProject
                dirtyField={dirtyFields.attachFile}
                register={register}
                errors={errors}
                watch={watch}
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
            type="submit"
            onClick={handleSubmit(onSubmit)}
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
