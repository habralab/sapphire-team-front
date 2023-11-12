import { useToast } from '@chakra-ui/react';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useApi } from '~/shared/hooks';

export const ProjectApi = () => {
  const { id: projectId } = useParams();
  const { projectsApi, userApi, storageApi } = useApi();
  const toast = useToast();
  const [ownerID, setOwnerID] = useState('');
  const [projectPositions, setProjectPositions] = useState<string[]>();
  const [specsIds, setSpecsIds] = useState<string[]>([]);
  const [skillsIds, setSkillsIds] = useState<string[]>([]);

  const { data: projectData, isSuccess: loadedProjectData } = useQuery({
    queryKey: ['getCurrentProject', projectId],
    queryFn: () => projectsApi.getCurrentProject(projectId ?? ''),
    onSuccess: (data) => {
      setOwnerID(data.owner_id);
    },
  });

  const { data: ownerData, isSuccess: loadedOwnerData } = useQuery({
    queryKey: ['ownerID', ownerID],
    queryFn: () => userApi.getUser(ownerID),
    enabled: !!ownerID,
  });

  const { isSuccess: loadedProjectPositions } = useQuery({
    queryKey: ['getProjectPositions', projectId],
    queryFn: () => projectsApi.getProjectPositions(projectId ?? ''),
    onSuccess: (data) => {
      const formatPositions = data.data.map(({ id }) => id);
      const positionSpecs = data.data.map(({ specialization_id }) => specialization_id);
      setProjectPositions(formatPositions);
      setSpecsIds(positionSpecs);
    },
  });

  const positionSkillsData = useQueries({
    queries: projectPositions
      ? projectPositions.map((positionId) => {
          return {
            queryKey: ['positionSkills', projectId, positionId],
            queryFn: () => projectsApi.getPositionSkills(projectId ?? '', positionId),
          };
        })
      : [],
  });

  useEffect(() => {
    const successSkills = positionSkillsData.filter(({ status }) => status === 'success');
    if (
      skillsIds.length === 0 &&
      positionSkillsData.length > 0 &&
      successSkills.length === positionSkillsData.length
    ) {
      const allProjectSkills = positionSkillsData.flatMap(({ data }) =>
        data ? data : [],
      );
      setSkillsIds(allProjectSkills);
    }
  }, [positionSkillsData]);

  const { data: specs, isSuccess: loadedSpecs } = useQuery({
    queryKey: ['specs'],
    queryFn: () => storageApi.getSpecs(),
    onError: (e: Error) => {
      toast({
        title: 'Ошибка получения специализаций',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const { data: skills, isSuccess: loadedSkills } = useQuery({
    queryKey: ['skills', skillsIds],
    queryFn: () => storageApi.getSkills(skillsIds),
    onError: (e: Error) => {
      toast({
        title: 'Ошибка получения навыков',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
    enabled: skillsIds.length > 0,
  });

  const filterMainTag = (positionId?: string) => {
    const mainTag = specs?.data
      .filter(({ id }) => id === positionId)
      .map(({ name }) => name ?? '');
    return mainTag;
  };

  const filterTags = (skillsIds?: string[]) => {
    const newSkills = skills
      ?.filter(({ value }) => skillsIds?.includes(value))
      .map(({ label }) => label);
    return newSkills;
  };
  return {
    projectData,
    ownerData,
    positionSkillsData,
    projectPositions,
    specsIds,
    loadedProjectData,
    loadedOwnerData,
    loadedProjectPositions,
    loadedSpecs,
    loadedSkills,
    filterMainTag,
    filterTags,
  };
};
