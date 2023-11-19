import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import { Button, Card, CloseButton, FormControl, FormLabel } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useApi } from '~/shared/hooks';
import { SelectOptions } from '~/shared/types';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';
import { STag } from '~/shared/ui/STag';

import { NewSpecialist } from '../AddProject.types';

interface TeamProps {
  newSpecialist: NewSpecialist[];
  setNewSpecialist: Dispatch<SetStateAction<NewSpecialist[]>>;
}

export const Team = (props: TeamProps) => {
  const { storageApi } = useApi();
  const { newSpecialist, setNewSpecialist } = props;
  const [userSpecs, setUserSpecs] = useState<string[]>([]);
  const [userSkills, setUserSkills] = useState<SelectOptions[]>([]);

  const { data: specs } = useQuery({
    queryKey: ['specs'],
    queryFn: () => storageApi.getSpecs(),
    staleTime: 5000,
  });

  const { data: specGroup } = useQuery({
    queryKey: ['specGroups'],
    queryFn: () => storageApi.getSpecGroups(),
    staleTime: 5000,
  });

  const getMainTag = (specId: string) => {
    if (specs && specGroup) {
      const mainTag = specs.data.filter(({ id }) => specId === id);
      const titleMainTag = specGroup.data.filter(({ id }) => mainTag[0].group_id === id);
      return { mainTag: mainTag[0].name ?? '', titleMainTag: titleMainTag[0].name };
    }
  };

  const handleNewSpecialist = () => {
    setNewSpecialist([
      ...newSpecialist,
      { spec: userSpecs[0], skills: [...userSkills], id: uuidv4() },
    ]);
    setUserSpecs([]);
    setUserSkills([]);
  };

  return (
    <>
      <Box mb={5}>
        <Stack gap={1} mb={4}>
          <FormControl isRequired>
            <FormLabel variant="h2" mb={3}>
              Специализация
            </FormLabel>
          </FormControl>
          <FilterSpecialization
            userSpecs={userSpecs}
            singleChecked={true}
            setUserSpecs={setUserSpecs}
          />
        </Stack>
      </Box>
      <Box mb={5}>
        <Stack gap={1}>
          <FormControl isRequired>
            <FormLabel variant="h2" mb={3}>
              Профессиональные навыки
            </FormLabel>
          </FormControl>
        </Stack>
        <Box mb={3}>
          <SearchSelect selectedItems={userSkills} setSelectedItems={setUserSkills} />
        </Box>
      </Box>
      <Button
        mb={5}
        isDisabled={userSpecs.length === 0 || userSkills.length === 0}
        type="button"
        onClick={handleNewSpecialist}
        fontSize="sm"
        fontWeight="600"
        w="full"
      >
        Добавить специалиста
      </Button>
      <Stack gap={6}>
        {newSpecialist.map((specialist) => {
          const tag = getMainTag(specialist.spec);
          return (
            <Card key={specialist.id} p={5} borderRadius="2xl" boxShadow="none">
              <Flex alignItems="baseline" justifyContent="space-between">
                <Heading variant="h2" mb={4}>
                  {tag ? tag.titleMainTag : ''}
                </Heading>
                <CloseButton
                  onClick={() => {
                    setNewSpecialist(
                      newSpecialist.filter(({ id }) => id !== specialist.id),
                    );
                  }}
                />
              </Flex>
              <STag
                mainTags={[tag ? tag.mainTag : '']}
                tags={specialist.skills.map(({ label }) => label)}
              />
            </Card>
          );
        })}
      </Stack>
    </>
  );
};
