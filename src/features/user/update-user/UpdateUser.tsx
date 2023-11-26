import {
  Button,
  Flex,
  Input,
  FormControl,
  FormLabel,
  useToast,
  FormErrorMessage,
  Icon,
  Center,
  Avatar,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdPhotoCamera } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { useGetAvatar } from '~/entities/user';

import { GetUserResponse } from '~/shared/api/types';
import { PATHS } from '~/shared/lib/router';
import { SelectOptions } from '~/shared/types';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';
import { STextarea } from '~/shared/ui/STextarea';

import {
  useDeleteAvatar,
  useUpdateAvatar,
  useUpdateProfile,
  useUpdateSkills,
} from './api';
import { userResponseToUserType, UserTypeForm } from './model';

interface UpdateUserProps {
  user: GetUserResponse;
  isAvatarExist: boolean;
  skills?: SelectOptions[];
}

const maxLength = 300;

export function UpdateUser({ user, isAvatarExist, skills }: UpdateUserProps) {
  const navigate = useNavigate();
  const toast = useToast();

  const { data: avatar } = useGetAvatar(user.id);
  const { mutate: updateUser } = useUpdateProfile();
  const { mutate: updateSkills } = useUpdateSkills();
  const { mutate: updateAvatar } = useUpdateAvatar();
  const { mutate: deleteAvatar } = useDeleteAvatar();

  const [previewImg, setPrevievImg] = useState('');

  useEffect(() => {
    if (isAvatarExist) {
      setPrevievImg(avatar ?? '');
    }
  }, [isAvatarExist, avatar]);

  const {
    control,
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting, isDirty, dirtyFields },
  } = useForm<UserTypeForm>({
    defaultValues: userResponseToUserType({ user, skills }),
  });

  const onSubmit = (data: UserTypeForm) => {
    if (!isDirty) {
      navigate(PATHS.profileMe);
      return;
    }

    try {
      if (
        dirtyFields.about ||
        dirtyFields.first_name ||
        dirtyFields.last_name ||
        dirtyFields.specs
      ) {
        const updatedUser = {
          id: user.id,
          first_name: data.first_name,
          last_name: data.last_name,
          about: data.about,
          main_specialization_id: data.specs[0] ?? null,
          secondary_specialization_id: data.specs[1] ?? null,
        };

        updateUser(updatedUser);
      }

      if (dirtyFields.skills) {
        const newSkills = {
          id: user.id,
          skills: data.skills.map((skill) => skill.value),
        };

        updateSkills(newSkills);
      }

      if (dirtyFields.avatar) {
        if (previewImg) {
          const newAvatar = {
            id: user.id,
            avatar: data.avatar[0],
          };
          updateAvatar(newAvatar);
        }
      }

      if (isAvatarExist && !previewImg) {
        deleteAvatar(user.id);
      }

      navigate(PATHS.profileMe);
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: 'Ошибка обновления профиля',
          description: err.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={6} mb={4}>
        <FormControl>
          <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between">
              <FormLabel mb={0}>Фото</FormLabel>
              {previewImg && (
                <Button
                  variant="filter"
                  color="gray.600"
                  onClick={() => {
                    setPrevievImg('');
                    resetField('avatar');
                  }}
                >
                  Удалить
                </Button>
              )}
            </Flex>
            <Center borderRadius="full" w={20} h={20} bg="white" position="relative">
              <Avatar name=" " src={previewImg} h={20} w={20} />
              <Icon
                as={MdPhotoCamera}
                position="absolute"
                bg="blackAlpha.500"
                color="white"
                w={4}
                h={4}
                border="4px"
                borderRadius="full"
                borderColor="transparent"
                boxSizing="content-box"
              />
              <Input
                h="full"
                type="file"
                accept="image/*"
                position="absolute"
                opacity={0}
                {...register('avatar', {
                  onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files?.length) {
                      setPrevievImg(URL.createObjectURL(e.target.files[0]));
                    }
                  },
                })}
              />
            </Center>
          </Flex>
        </FormControl>
        <Flex direction="column" gap={4}>
          <FormLabel mb={0}>Email</FormLabel>
          <Input
            py={4}
            px={5}
            bg="white"
            borderRadius="full"
            {...register('email')}
            disabled
          />
        </Flex>
        <FormControl isRequired isInvalid={!!errors.first_name}>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Имя</FormLabel>
            <Input
              placeholder="Ваше имя"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('first_name', {
                required: 'Обязательное поле',
                minLength: { value: 2, message: 'Введите минимум 2 символа' },
              })}
            />
          </Flex>
          <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.last_name}>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Фамилия</FormLabel>
            <Input
              placeholder="Ваша фамилия"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('last_name', {
                required: 'Обязательное поле',
                minLength: { value: 2, message: 'Введите минимум 2 символа' },
              })}
            />
            <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>О себе</FormLabel>
            <Controller
              control={control}
              name="about"
              render={({ field: { onChange, value } }) => {
                return (
                  <STextarea
                    maxLength={maxLength}
                    value={value}
                    setValue={onChange}
                    placeholder="Напишите о себе поподробнее. Хороший рассказ убедит обратиться именно к вам"
                  />
                );
              }}
            />
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel mb={4}>Специализация</FormLabel>
          <Controller
            control={control}
            name="specs"
            render={({ field: { onChange, value } }) => {
              return (
                <FilterSpecialization
                  userSpecs={value}
                  setUserSpecs={onChange}
                  doubleChecked={true}
                />
              );
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={4}>Профессиональные навыки</FormLabel>
          <Controller
            control={control}
            name="skills"
            render={({ field: { onChange, value } }) => {
              return <SearchSelect selectedItems={value} setSelectedItems={onChange} />;
            }}
          />
        </FormControl>
        <Button fontWeight="semibold" w="full" isLoading={isSubmitting} type="submit">
          Сохранить
        </Button>
      </Flex>
    </form>
  );
}
