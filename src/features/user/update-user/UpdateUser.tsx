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
} from '@chakra-ui/react';
import { Controller, useForm, Form } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';

import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';
import { STextarea } from '~/shared/ui/STextarea';

interface UserType {
  avatar: File | null;
  name: string;
  information: string;
  specialization: string[];
  skills: {
    value: string;
    label: string;
  }[];
}

export function UpdateUser() {
  const {
    control,
    resetField,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({
    defaultValues: {
      avatar: null,
      name: '',
      information: '',
      specialization: [],
      skills: [],
    },
  });

  const maxLength = 300;

  const watchShowAvatar = watch('avatar');

  const onSubmit = (data: UserType) => {
    console.log(data);
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
        <FormControl isInvalid={!!errors.avatar}>
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
            >
              <Input
                w="fit-content"
                type="file"
                accept="image/*"
                capture="user"
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
            )}
          </Flex>
        </FormControl>
        <FormControl isInvalid={!!errors.name}>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>Имя</FormLabel>
            <Input
              placeholder="Как вас зовут?"
              py={4}
              px={5}
              bg="white"
              borderRadius="full"
              {...register('name')}
            />
          </Flex>
        </FormControl>
        <FormControl isInvalid={!!errors.information}>
          <Flex direction="column" gap={4}>
            <FormLabel mb={0}>О себе</FormLabel>
            <Controller
              control={control}
              name="information"
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
            name="specialization"
            render={({ field: { onChange, value } }) => {
              return <FilterSpecialization userSpecs={value} setUserSpecs={onChange} />;
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={4}>Профессиональные навыки</FormLabel>
          <Controller
            control={control}
            name="skills"
            render={({ field: { value, onChange } }) => {
              return <SearchSelect selectedItems={value} setSelectedItems={onChange} />;
            }}
          />
        </FormControl>
        <Button fontWeight="semibold" w="full" isLoading={isSubmitting} type="submit">
          Сохранить
        </Button>
      </Flex>
    </Form>
  );
}
