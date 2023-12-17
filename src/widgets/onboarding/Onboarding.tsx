import {
  Box,
  Container,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
  Portal,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useUpdateAvatar, useUpdateProfile, useUpdateSkills } from '~/features/user';

import { useLayoutRefs } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import type { CreateUserType } from './Onboarding.types';
import { WelcomeTabs, AvatarTabs, NameTabs, SkillsTabs } from './tabs';

interface OnboardingProps {
  userId: string;
}

const defaultUser = {
  first_name: '',
  last_name: '',
  avatar: null,
  about: null,
  main_specialization_id: null,
  secondary_specialization_id: null,
  specs: [],
  skills: [],
};

export function Onboarding({ userId }: OnboardingProps) {
  const layout = useLayoutRefs();
  const toast = useToast();
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(0);
  const [previewImg, setPrevievImg] = useState('');
  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isLastNameFilled, setIsLastNameFilled] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const { mutate: mutateUser, data: result } = useUpdateProfile();
  const { mutate: mutateSkills } = useUpdateSkills();
  const { mutate: mutateAvatar } = useUpdateAvatar();

  const form = useForm<CreateUserType>({
    defaultValues: defaultUser,
  });

  const { handleSubmit } = form;

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    if (result?.is_activated) {
      location.href = PATHS.search;
    }
  }, [result]);

  const onSubmit: SubmitHandler<CreateUserType> = (data) => {
    try {
      setIsAdding(true);

      const newUser = {
        id: userId,
        first_name: data.first_name,
        last_name: data.last_name,
        about: data.about,
        main_specialization_id: data.specs[0] ?? null,
        secondary_specialization_id: data.specs[1] ?? null,
      };

      mutateUser(newUser);

      const newSkills = {
        id: userId,
        skills: data.skills.map((skill) => skill.value),
      };

      mutateSkills(newSkills);

      if (previewImg && data.avatar?.length) {
        const newAvatar = {
          id: userId,
          avatar: data.avatar[0],
        };

        mutateAvatar(newAvatar);
      }
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: 'Ошибка создания профиля',
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

  return (
    <Container maxW="md" px={5}>
      <Tabs variant="onboard" index={tabIndex} onChange={handleTabsChange}>
        <TabList my={5} position="relative">
          {tabIndex > 0 && (
            <Box position="absolute" left={0}>
              <IconButton
                aria-label="back"
                icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
                variant="flat"
                onClick={() => {
                  handleTabsChange(tabIndex - 1);
                }}
                minW={6}
                h={6}
              />
            </Box>
          )}
          <Tab isDisabled></Tab>
          <Tab isDisabled></Tab>
          <Tab isDisabled></Tab>
          <Tab isDisabled></Tab>
        </TabList>

        <form id="createUser" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TabPanels>
            <TabPanel>
              <WelcomeTabs />
            </TabPanel>

            <TabPanel>
              <NameTabs
                form={form}
                setIsNameFilled={setIsNameFilled}
                setIsLastNameFilled={setIsLastNameFilled}
              />
            </TabPanel>
            <TabPanel>
              <AvatarTabs
                form={form}
                previewImg={previewImg}
                setPrevievImg={setPrevievImg}
              />
            </TabPanel>
            <TabPanel>
              <SkillsTabs form={form} />
            </TabPanel>
          </TabPanels>
        </form>
      </Tabs>
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={5} maxW="md">
            {tabIndex === 3 && (
              <Button form="createUser" type="submit" w="full" isLoading={isAdding}>
                Продолжить
              </Button>
            )}
            {tabIndex < 3 && (
              <Button
                w="full"
                isDisabled={tabIndex === 1 && (!isNameFilled || !isLastNameFilled)}
                onClick={() => {
                  handleTabsChange(tabIndex + 1);
                }}
              >
                Продолжить
              </Button>
            )}
          </Container>
        </Portal>
      )}
    </Container>
  );
}
