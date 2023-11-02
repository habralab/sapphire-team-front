import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Icon,
  IconButton,
  Tag,
  TagLabel,
  FormControl,
} from '@chakra-ui/react';
import { Controller, useForm, Form } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';

import { STextarea } from '~/shared/ui/STextarea';

interface UserType {
  avatar: File | null;
  name: string;
  information: string;
}

export function UpdateUser() {
  const {
    control,
    resetField,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserType>();

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
            <Heading variant="h3">Фото</Heading>
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
            <Heading variant="h3">Имя</Heading>
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
            <Heading variant="h3">О себе</Heading>
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
        <Button fontWeight="semibold" w="full" isLoading={isSubmitting} type="submit">
          Сохранить
        </Button>
      </Flex>
    </Form>
  );
}
