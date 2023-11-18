import { Flex, SimpleGrid, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ProjectCard } from '~/widgets/project-card';

import { Filter, SearchProject } from '~/features/project';

import { data } from '~/shared/lib/data';
import {
  loadDataFromStorage,
  loadSkillsFromStorage,
  loadSpecsFromStorage,
} from '~/shared/lib/storageActions';
import { STag } from '~/shared/ui/STag';

import { useGetAllProjects } from '../api/useGetAllProjects';

export const SearchPageDesktop = () => {
  const [userSpecs, setUserSpecs] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [date, setDate] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const localSpecs = loadSpecsFromStorage();
    const localSkills = loadSkillsFromStorage();
    const localData = loadDataFromStorage();
    if (localSpecs.length) setUserSpecs(localSpecs);
    if (localSkills.length) setSelectedItems(localSkills);
    if (localData.length) setDate(localData);
  }, []);

  // const { data, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllProjects(
  //   userSpecs,
  //   selectedItems,
  //   date,
  //   searchText,
  // );

  const handleSumbit = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading variant="h1" as="h1">
            Поиск
          </Heading>
        </Flex>
        <Flex gap="4" mb={4}>
          <SearchProject onChange={handleSumbit} />
          <Filter
            userSpecs={userSpecs}
            setUserSpecs={setUserSpecs}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            filterDate={date}
            setFilterDate={setDate}
            // totalItems={data.pages[0].total_items}
          />
        </Flex>
        <SimpleGrid columns={2} gap={6}>
          {data.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                status={project.status}
                title={project.title}
                date={project.date}
                description={project.description}
              >
                <STag mainTags={project.mainTags} tags={project.tags} />
              </ProjectCard>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};
