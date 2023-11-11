import { Button, Flex, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { GetUserResponse, UpdateUserRequest } from '~/shared/api';
import { useApi } from '~/shared/hooks';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
// import { SearchSelect } from '~/shared/ui/SearchSelect';
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

const maxLength = 300;

export function UpdateUser({ user }: UpdateUserProps) {
  const navigate = useNavigate();
  const { userApi } = useApi();
  const toast = useToast();
  const [userSpecs, setUserSpecs] = useState<string[]>([]);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserType>({
    defaultValues: user,
  });

  const { mutate } = useMutation({
    mutationFn: (data: UpdateUserRequest) => userApi.updateUser(data),
    onSuccess: () => {
      navigate(-2);
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

  const onSubmit = (data: UserType) => {
    const updatedUser = {
      id: user.id,
      first_name: data.first_name,
      last_name: data.last_name,
      about: data.about,
      main_specialization_id: userSpecs[0],
      secondary_specialization_id: userSpecs[1],
    };

    mutate(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={6}>
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
        <FormControl>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Имя</FormLabel>
            <Input
              placeholder="Ваше имя"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('first_name', { required: true, minLength: 2 })}
            />
          </Flex>
        </FormControl>
        <FormControl>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Фамилия</FormLabel>
            <Input
              placeholder="Ваша фамилия"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('last_name', { required: true, minLength: 2 })}
            />
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
        <FormControl>
          <FormLabel mb={4}>Специализация</FormLabel>
          <FilterSpecialization
            userSpecs={userSpecs}
            setUserSpecs={setUserSpecs}
            doubleChecked={true}
          />
        </FormControl>
        {/* <FormControl>
          <FormLabel mb={4}>Профессиональные навыки</FormLabel>
          <Controller
            control={control}
            name="skills"
            render={({ field: { value, onChange } }) => {
              return <SearchSelect selectedItems={value} setSelectedItems={onChange} />;
            }}
          />
        </FormControl> */}
        <Button fontWeight="semibold" w="full" isLoading={isSubmitting} type="submit">
          Сохранить
        </Button>
      </Flex>
    </form>
  );
}
