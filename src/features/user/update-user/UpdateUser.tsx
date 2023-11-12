import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Input,
  FormControl,
  FormLabel,
  useToast,
  FormErrorMessage,
  TagLabel,
  IconButton,
  Icon,
  Text,
  Tag,
} from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { GetUserResponse, UpdateUserRequest } from '~/shared/api';
import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';
import { STextarea } from '~/shared/ui/STextarea';

interface UpdateUserProps {
  user: GetUserResponse;
}

interface UserType {
  first_name: string | null;
  last_name: string | null;
  about: string | null;
  main_specialization_id: string | null;
  secondary_specialization_id: string | null;
  email: string | null;
}

interface AvatarType {
  avatar: string;
}

const maxLength = 300;

export function UpdateUser({ user }: UpdateUserProps) {
  const navigate = useNavigate();
  const { userApi } = useApi();
  const toast = useToast();
  const [userSpecs, setUserSpecs] = useState<string[]>(
    user.main_specialization_id && user.secondary_specialization_id
      ? [user.main_specialization_id, user.secondary_specialization_id]
      : user.main_specialization_id
      ? [user.main_specialization_id]
      : [],
  );
  const [userSkills, setUserSkills] = useState<{ value: string; label: string }[]>([]);

  const {
    control,
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<UserType & AvatarType>({
    defaultValues: user,
  });

  const { data: avatar } = useQuery({
    queryKey: ['avatar', user.id],
    queryFn: () => userApi.getUserAvatar({ user_id: user.id }),
  });

  const { data: skills } = useQuery({
    queryKey: ['getUserSkills', user.id],
    queryFn: () => userApi.getUserSkills({ user_id: user.id }),
  });

  const { mutate } = useMutation({
    mutationFn: (data: UpdateUserRequest) => userApi.updateUser(data),
    onSuccess: () => {
      navigate(PATHS.profile);
    },
    onError: (e: Error) => {
      toast({
        title: 'Ошибка обновления профиля',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const onSubmit = (data: UserType) => {
    const updatedUser = {
      id: user.id,
      first_name: data.first_name,
      last_name: data.last_name,
      about: data.about,
      main_specialization_id: userSpecs[0],
      secondary_specialization_id: userSpecs[1] ?? null,
    };

    mutate(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={6}>
        <Flex direction="column" gap={4}>
          <FormLabel mb={0}>Фото</FormLabel>
          <Flex
            fontWeight="normal"
            fontSize="sm"
            py={2}
            px={5}
            bg="white"
            borderRadius="full"
            alignItems="center"
            justifyContent="space-between"
            position="relative"
          >
            <Input
              w="fit-content"
              type="file"
              accept="image/*"
              position="absolute"
              opacity={0}
              {...register('avatar')}
            />
            <Text>Добавить фотографию</Text>
            <Icon as={BsPlus} fontSize="2xl" />
          </Flex>
          {!!avatar && (
            <Tag
              w="fit-content"
              size="sm"
              bg="gray.300"
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              <TagLabel>Фото</TagLabel>
              <IconButton
                onClick={() => {
                  resetField('avatar');
                }}
                aria-label="Close"
                variant="ghost"
                flexShrink="0"
                minW="none"
                height="none"
                fontWeight="normal"
                icon={<SmallCloseIcon boxSize={4} />}
              />
            </Tag>
          )}
        </Flex>
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
                    value={value ?? ''}
                    setValue={onChange}
                    placeholder="Напишите о себе поподробнее. Хороший рассказ убедит обратиться именно к вам"
                  />
                );
              }}
            />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <FormLabel mb={4}>Специализация</FormLabel>
          <FilterSpecialization
            userSpecs={userSpecs}
            setUserSpecs={setUserSpecs}
            doubleChecked={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={4}>Профессиональные навыки</FormLabel>
          <SearchSelect selectedItems={userSkills} setSelectedItems={setUserSkills} />;
        </FormControl>
        <Button fontWeight="semibold" w="full" isLoading={isSubmitting} type="submit">
          Сохранить
        </Button>
      </Flex>
    </form>
  );
}
