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
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiChevronLeft } from 'react-icons/fi';

import { useUpdateAvatar, useUpdateProfile, useUpdateSkills } from '~/features/user';

import { useLayoutRefs } from '~/shared/hooks';

import { CreateUserType } from './Onboarding.types';
import { WelcomeTabs, AvatarTabs, NameTabs, SkillsTabs } from './tabs';

interface OnboardingProps {
  userId: string;
}

export function Onboarding({ userId }: OnboardingProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const layout = useLayoutRefs();
  const [previewImg, setPrevievImg] = useState('');
  const toast = useToast();
  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isLastNameFilled, setIsLastNameFilled] = useState(false);

  const { mutate: mutateUser } = useUpdateProfile();
  const { mutate: mutateSkills } = useUpdateSkills();
  const { mutate: mutateAvatar } = useUpdateAvatar();

  const form = useForm<CreateUserType>({
    defaultValues: {
      first_name: '',
      last_name: '',
      avatar: null,
      about: null,
      main_specialization_id: null,
      secondary_specialization_id: null,
      specs: [],
      skills: [],
    },
  });

  const { handleSubmit } = form;

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const onSubmit: SubmitHandler<CreateUserType> = (data) => {
    try {
      const newUser = {
        id: userId,
        first_name: data.first_name,
        last_name: data.last_name,
        about: data.about,
        main_specialization_id: data.specs[0] ?? null,
        secondary_specialization_id: data.specs[1] ?? null,
      };

      console.log(newUser);
      mutateUser(newUser);

      const newSkills = {
        id: userId,
        skills: data.skills.map((skill) => skill.value),
      };

      console.log(newSkills);
      mutateSkills(newSkills);

      if (previewImg && data.avatar?.length) {
        const newAvatar = {
          id: userId,
          avatar: data.avatar[0],
        };
        console.log(newAvatar);
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
    }
  };

  console.log(tabIndex);

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

        <form id="createUser" onSubmit={handleSubmit(onSubmit)}>
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
              <Button form="createUser" type="submit" w="full">
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
