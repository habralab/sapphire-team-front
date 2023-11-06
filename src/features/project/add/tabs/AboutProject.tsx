import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Text } from '@chakra-ui/layout';
import { Icon, IconButton, Flex, Box, Switch, Input } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';

import { STextarea } from '~/shared/ui/STextarea';

export interface Inputs {
  attachFile: string;
  title: string;
  date: string;
  pause: boolean;
}

interface UseHookForm {
  dirtyFields: Partial<
    Readonly<{
      attachFile?: boolean | undefined;
      title?: boolean | undefined;
      description?: boolean | undefined;
      date?: boolean | undefined;
      pause?: boolean | undefined;
    }>
  >;
  register: UseFormRegister<Inputs>;
  errors?: FieldErrors<Inputs>;
}

interface AboutProjectProps {
  form: UseHookForm;
  description: string;
  setDescription: (description: string) => void;
}

export const AboutProject = (props: AboutProjectProps) => {
  const { description, setDescription } = props;
  const { dirtyFields, register } = props.form;

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
      <FormControl mb={6} isRequired>
        <FormLabel mb={4}>Название</FormLabel>
        <Input
          type="text"
          bg="white"
          borderRadius="full"
          fontSize="sm"
          placeholder="Название проекта"
          {...register('title')}
        />
      </FormControl>
      <FormControl mb={6} isRequired>
        <FormLabel mb={4}>Описание</FormLabel>
        <Box position="relative">
          <STextarea
            placeholder="Напишите о проекте подробнее. Хороший рассказ привлечет больше заявок."
            maxLength={300}
            value={description}
            setValue={setDescription}
          />
        </Box>
      </FormControl>
      <FormControl mb={6} isRequired>
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
      <FormControl display="flex" alignItems="center" justifyContent="space-between">
        <FormLabel htmlFor="project-on-pause" mb="0">
          Проект на паузе
        </FormLabel>
        <Switch id="project-on-pause" my={1} {...register('pause')} />
      </FormControl>
    </>
  );
};
