import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Input,
  Text,
  Icon,
  IconButton,
  Tag,
  TagLabel,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Controller, useForm, Form } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import {
  GetSpecGroupsDataResponse,
  UpdateUserParams,
  UpdateUserRequest,
} from '~/shared/api';
import { useApi, useAuth } from '~/shared/hooks';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';
import { STag } from '~/shared/ui/STag';
import { STextarea } from '~/shared/ui/STextarea';

interface UserType {
  first_name: string;
  last_name: string;
  about: string;
  main_specialization_id: string;
  secondary_specialization_id: string;
}

const maxLength = 300;

export function UpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { userApi, storageApi } = useApi();
  const { userId, isAuth } = useAuth();
  const [userSpecs, setUserSpecs] = useState<string[]>([]);

  // const [updatedUser, setUpdatedUser] = useState<UserType>({
  //   first_name: null,
  //   last_name: null,
  //   about: null,
  //   main_specialization_id: null,
  //   secondary_specialization_id: null,
  // });

  const {
    control,
    resetField,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserType>();

  // const watchShowAvatar = watch('avatar');

  const { mutate } = useMutation({
    mutationFn: ({ user_id, ...data }: UpdateUserParams & UpdateUserRequest) =>
      userApi.updateUser({ user_id, ...data }),
    // onSuccess: () => {
    //   queryClient.invalidateQueries(['getAllProjects']);
    //   navigate(-1);
    // },
    // onError: (e: Error) => {
    //   toast({
    //     title: 'Ошибка создания проекта',
    //     description: e.message,
    //     status: 'error',
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // },
  });

  const onSubmit = (data: UserType) => {
    const updatedUser = {
      first_name: data.first_name,
      last_name: data.last_name,
      about: data.about,
      main_specialization_id: [...userSpecs][0],
      secondary_specialization_id: [...userSpecs][1] ?? null,
    };
    console.log(updatedUser);

    if (userId) {
      mutate({ user_id: userId, ...updatedUser });
    }
  };

  return (
    <Form
      control={control}
      onSubmit={({ event, data }) => {
        event?.preventDefault();
        onSubmit(data);
      }}
    >
      <Flex direction="column" gap={6}>
        {/* <FormControl isInvalid={!!errors.avatar}>
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
            {watchShowAvatar && (
              <Tag
                w="fit-content"
                size="sm"
                bg="gray.300"
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="medium"
              >
                <TagLabel>Фотография</TagLabel>
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
            )} */}
        {/* </Flex>
        </FormControl> */}
        <FormControl>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Имя</FormLabel>
            <Input
              placeholder="Как вас зовут?"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('first_name')}
            />
          </Flex>
        </FormControl>
        <FormControl>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Фамилия</FormLabel>
            <Input
              placeholder="Как вас зовут?"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('last_name')}
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
          <FilterSpecialization
            userSpecs={userSpecs}
            setUserSpecs={setUserSpecs}
            singleChecked={true}
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
    </Form>
  );
}
