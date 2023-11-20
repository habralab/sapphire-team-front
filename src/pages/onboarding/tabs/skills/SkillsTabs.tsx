import { FormControl, FormLabel, Heading, Stack, Text } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';

import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';

interface SkillsTabs {
  handleTabsChange: (index: number) => void;
  tabIndex: number;
}

export function SkillsTabs() {
  const { control } = useForm({});

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
            render={({ field: { onChange } }) => {
              return (
                <FilterSpecialization
                  userSpecs={[]}
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
            render={({ field: { onChange } }) => {
              return <SearchSelect selectedItems={[]} setSelectedItems={onChange} />;
            }}
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}
