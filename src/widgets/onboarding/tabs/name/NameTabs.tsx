import {
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import type { useForm } from 'react-hook-form';

import type { CreateUserType } from '../../Onboarding.types';

interface NameTabsProps {
  form: ReturnType<typeof useForm<CreateUserType>>;
  setIsNameFilled: (isNameFilled: boolean) => void;
  setIsLastNameFilled: (isLastNameFilled: boolean) => void;
}

export function NameTabs(props: NameTabsProps) {
  const { setIsNameFilled, setIsLastNameFilled } = props;
  const {
    register,
    formState: { errors },
  } = props.form;

  return (
    <Stack mt={10} gap={6}>
      <Stack gap={4}>
        <Heading variant="h1">Как вас зовут?</Heading>
        <Text color="gray.600">Имя и фамилия будут отображаться в Профиле</Text>
      </Stack>
      <Stack gap={4}>
        <FormControl isInvalid={!!errors.first_name} isRequired>
          <Input
            placeholder="Ваше имя*"
            py={4}
            px={5}
            bg="white"
            borderRadius="full"
            {...register('first_name', {
              required: 'Обязательное поле',
              minLength: { value: 2, message: 'Введите минимум 2 символа' },
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value && e.target.value.length > 3) {
                  setIsNameFilled(true);
                }
              },
            })}
          />
          <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.last_name} isRequired>
          <Input
            placeholder="Ваша фамилия*"
            py={4}
            px={5}
            bg="white"
            borderRadius="full"
            {...register('last_name', {
              required: 'Обязательное поле',
              minLength: { value: 2, message: 'Введите минимум 2 символа' },
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value && e.target.value.length > 3) {
                  setIsLastNameFilled(true);
                }
              },
            })}
          />
          <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
    </Stack>
  );
}
