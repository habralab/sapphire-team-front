import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Text } from '@chakra-ui/layout';
import { Icon, IconButton, Input, Flex, Textarea, Box, Switch } from '@chakra-ui/react';
import { FieldErrors } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import ResizeTextarea from 'react-textarea-autosize';

export interface Inputs {
  attachFile: string;
  title: string;
  description: string;
  date: string;
  pause: boolean;
}

interface AboutProjectProps {
  dirtyField?: boolean;
  register: (name: 'attachFile' | 'title' | 'description' | 'date' | 'pause') => object;
  watch: (names?: string) => string[];
  errors: FieldErrors<Inputs>;
}

export const AboutProject = (props: AboutProjectProps) => {
  const { dirtyField, register, watch, errors } = props;
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
          {dirtyField && (
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
      <FormControl mb={6}>
        <FormLabel mb={4}>Название</FormLabel>
        <Input
          type="text"
          bg="white"
          borderRadius="full"
          fontSize="sm"
          placeholder="Название проекта"
          {...register('title')}
        />
        {errors.title && <FormErrorMessage>Название обязательно.</FormErrorMessage>}
      </FormControl>
      <FormControl mb={6}>
        <FormLabel mb={4}>Описание</FormLabel>
        <Box position="relative">
          <Textarea
            as={ResizeTextarea}
            placeholder="Напишите о проекте подробнее. Хороший рассказ привлечет больше заявок."
            p={5}
            bg="white"
            borderRadius="2xl"
            size="sm"
            minH={28}
            resize="vertical"
            {...register('description')}
          />
          <Flex
            position="absolute"
            fontSize="xs"
            bottom={2}
            right={2}
            color={watch('description').length > 300 ? 'red' : 'gray.400'}
            zIndex={3}
          >
            <Text>{watch('description').length}/300</Text>
          </Flex>
        </Box>
      </FormControl>
      <FormControl mb={6}>
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
        <FormLabel htmlFor="email-alerts" mb="0">
          Проект на паузе
        </FormLabel>
        <Switch id="email-alerts" my={1} {...register('pause')} />
      </FormControl>
    </>
  );
};
