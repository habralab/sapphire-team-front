import { FormControl, FormLabel, Heading, Stack, Text } from '@chakra-ui/react';
import { Controller, type useForm } from 'react-hook-form';

import { FilterSpecialization } from '~/features/filter';

import { SearchSelect } from '~/shared/ui/SearchSelect';

import type { CreateUserType } from '../../Onboarding.types';

interface SkillsTabs {
  form: ReturnType<typeof useForm<CreateUserType>>;
}

export function SkillsTabs(props: SkillsTabs) {
  const { control } = props.form;

  return (
    <Stack mt={10} gap={10}>
      <Stack gap={4}>
        <Heading variant="h1">Добавьте свою специализацию и навыки</Heading>
        <Text color="gray.600">
          Будем показывать только соответствующие вашей специализации проекты
        </Text>
      </Stack>
      <Stack gap={4}>
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
      </Stack>
    </Stack>
  );
}
