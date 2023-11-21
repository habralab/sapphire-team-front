import { Text } from '@chakra-ui/layout';
import {
  Icon,
  IconButton,
  Flex,
  Switch,
  Input,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Image,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsPlus, BsX } from 'react-icons/bs';

import { useIsMobile } from '~/shared/hooks';
import { STextarea } from '~/shared/ui/STextarea';

import { AddProjectForm } from '../AddProject.types';

interface AboutProjectProps {
  form: ReturnType<typeof useForm<AddProjectForm>>;
}

export const AboutProject = (props: AboutProjectProps) => {
  const isMobile = useIsMobile();
  const {
    register,
    control,
    resetField,
    formState: { errors },
  } = props.form;

  const [previewImg, setPrevievImg] = useState('');

  return (
    <>
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
          <Text>{previewImg ? 'Удалить обложку' : 'Добавить обложку'}</Text>
          {previewImg ? (
            <IconButton
              variant="ghost"
              onClick={() => {
                resetField('attachFile');
                setPrevievImg('');
              }}
              aria-label="Удалить обложку проекта"
              gap={2}
              flexShrink="0"
              h={0}
              minW="none"
              padding={isMobile ? 0 : 4}
              icon={
                <>
                  <Icon as={BsX} fontSize="2xl" />
                </>
              }
            />
          ) : (
            <IconButton
              variant="ghost"
              position="relative"
              aria-label="Добавить обложку проекта"
              gap={2}
              flexShrink="0"
              h={0}
              minW="none"
              padding={isMobile ? 0 : 4}
              icon={
                <>
                  <Icon as={BsPlus} fontSize="2xl" />
                  <Input
                    type="file"
                    height="100%"
                    width="100%"
                    overflow="hidden"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/*"
                    {...register('attachFile', {
                      onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files) {
                          setPrevievImg(URL.createObjectURL(e.target.files[0]));
                        }
                      },
                    })}
                  />
                </>
              }
            />
          )}
        </Flex>
        {previewImg && (
          <Flex justifyContent="center" mt={3}>
            <Image src={previewImg} maxH={32} objectFit="cover" borderRadius="2xl" />
          </Flex>
        )}
      </FormControl>
      <FormControl mb={6} isInvalid={!!errors.title} isRequired>
        <FormLabel mb={4}>Название</FormLabel>
        <Input
          type="text"
          bg="white"
          borderRadius="full"
          fontSize="sm"
          placeholder="Название проекта"
          {...register('title', {
            required: 'Обязательное поле',
            minLength: { value: 3, message: 'Минимальная длина 3 символа' },
          })}
        />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mb={6} isInvalid={!!errors.description} isRequired>
        <FormLabel mb={4}>Описание</FormLabel>
        <Controller
          name="description"
          rules={{
            required: 'Обязательное поле',
          }}
          render={({ field: { value, onChange }, fieldState: { invalid } }) => (
            <STextarea
              placeholder="Напишите о проекте подробнее. Хороший рассказ привлечет больше заявок."
              maxLength={300}
              value={value}
              setValue={onChange}
              isInvalid={invalid}
            />
          )}
          control={control}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mb={6} isInvalid={!!errors.startDate} isRequired>
        <FormLabel mb={4}>Начало проекта</FormLabel>
        <Input
          variant="filled"
          bg="white"
          borderRadius="full"
          fontSize="sm"
          type="date"
          {...register('startDate', {
            required: 'Обязательное поле',
          })}
        />
        <FormErrorMessage>{errors.startDate?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mb={6} isInvalid={!!errors.deadlineDate} isRequired>
        <FormLabel mb={4}>Окончание проекта</FormLabel>
        <Input
          variant="filled"
          bg="white"
          borderRadius="full"
          fontSize="sm"
          type="date"
          {...register('deadlineDate', {
            required: 'Обязательное поле',
          })}
        />
        <FormErrorMessage>{errors.deadlineDate?.message}</FormErrorMessage>
      </FormControl>
      <FormControl display="flex" alignItems="center" justifyContent="space-between">
        <FormLabel htmlFor="project-on-pause" mb="0">
          Проект на паузе
        </FormLabel>
        <Switch id="project-on-pause" my={1} {...register('pause')} />
      </FormControl>
    </>
  );
};