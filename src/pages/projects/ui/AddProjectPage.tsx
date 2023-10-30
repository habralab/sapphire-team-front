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
  Input,
  Box,
  Text,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Switch,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  attachFile: string;
  title: string;
  description: string;
  date: string;
  pause: boolean;
}

export const AddProjectPage = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<Inputs>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('object');
    console.log(data);
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" justifyContent="space-between" my={4}>
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
        <TabPanels>
          <TabPanel>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mb={6}>
                <FormLabel mb={4}>Обложка</FormLabel>
                <Flex
                  bg="white"
                  py={3}
                  px={5}
                  borderRadius="full"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Добавить обложку</Text>
                  {dirtyFields.attachFile && (
                    <Text ml="auto" color="purple" fontSize="xs">
                      Добавлено
                    </Text>
                  )}
                  <IconButton
                    variant="ghost"
                    position="relative"
                    aria-label="add-project-cover"
                    gap={2}
                    flexShrink="0"
                    h={0}
                    minW="none"
                    padding={['0', '0', '4']}
                    icon={
                      <>
                        <Icon as={BsPlus} fontSize="xl" />
                        <Input
                          type="file"
                          height="100%"
                          width="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          opacity="0"
                          aria-hidden="true"
                          accept="image/*"
                          {...register('attachFile')}
                        />
                      </>
                    }
                  />
                </Flex>
              </FormControl>
              <FormControl mb={6}>
                <FormLabel mb={4}>Название</FormLabel>
                <Input
                  type="text"
                  bg="white"
                  borderRadius="full"
                  fontSize="sm"
                  placeholder="Название проекта"
                  {...register('title')}
                />
                {errors.title && (
                  <FormErrorMessage>Название обязательно.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl mb={6}>
                <FormLabel mb={4}>Описание</FormLabel>
                <Textarea
                  placeholder="Напишите о проекте подробнее. Хороший рассказ привлечет больше заявок."
                  p={5}
                  bg="white"
                  borderRadius="2xl"
                  size="sm"
                  minH={28}
                  {...register('description')}
                />
              </FormControl>
              <FormControl mb={6}>
                <FormLabel mb={4}>Начало проекта</FormLabel>
                <Input
                  variant="filled"
                  bg="white"
                  borderRadius="full"
                  fontSize="sm"
                  type="date"
                  {...register('date')}
                />
              </FormControl>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormLabel htmlFor="email-alerts" mb="0">
                  Проект на паузе
                </FormLabel>
                <Switch id="email-alerts" my={1} {...register('pause')} />
              </FormControl>
            </form>
          </TabPanel>
          <TabPanel>Тест2</TabPanel>
        </TabPanels>
      </Tabs>
      <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0" mt="auto">
        {tabIndex === 0 && (
          <Button
            type="submit"
            // onClick={() => {
            //   handleTabsChange(1);
            // }}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Продолжить
          </Button>
        )}
      </Container>
    </Container>
  );
};
