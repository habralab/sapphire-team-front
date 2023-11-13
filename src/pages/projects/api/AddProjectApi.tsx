/* eslint-disable @typescript-eslint/no-floating-promises */
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseFormWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Inputs, NewSpecialist } from '~/features/project';

import {
  NewProjectParams,
  UpdateProjectAvatar,
  UpdateProjectAvatarID,
} from '~/shared/api';
import { useApi } from '~/shared/hooks';

interface newPosition {
  project_id: string;
  specialization_id: string;
}

interface updateSkills {
  project_id: string;
  postiton_id: string;
  skills: string[];
}

interface AddProjectApiProps {
  newSpecialist: NewSpecialist[];
  dirtyFields: Partial<
    Readonly<{
      attachFile?: boolean | undefined;
      title?: boolean | undefined;
      description?: boolean | undefined;
      date?: boolean | undefined;
      pause?: boolean | undefined;
    }>
  >;
  watch: UseFormWatch<Inputs>;
}

export const AddProjectApi = ({
  newSpecialist,
  dirtyFields,
  watch,
}: AddProjectApiProps) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { projectsApi } = useApi();

  const { mutate: addProject, isLoading: loadingAddProject } = useMutation({
    mutationFn: (data: NewProjectParams) => projectsApi.addNewProject(data),
    onSuccess: (data) => {
      newSpecialist.forEach(({ spec }) => {
        const newPosition: newPosition = {
          project_id: data.id,
          specialization_id: spec,
        };
        createPositionMutate(newPosition);
        if (dirtyFields.attachFile)
          uploadProjectAvatar({ project_id: data.id, avatar: watch('attachFile')[0] });
      });
    },
    onError: (e: Error) => {
      toast({
        title: 'Ошибка создания проекта',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const { mutate: updateSkillsMutate, isLoading: loadingUpdateSkill } = useMutation({
    mutationFn: (updateSkills: updateSkills) => {
      const { project_id, postiton_id, skills } = updateSkills;
      return projectsApi.updateSkills(project_id, postiton_id, skills);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['getAllProjects']);
      navigate(-1);
    },
    onError: (e: Error) => {
      toast({
        title: 'Ошибка добавления навыков',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const { mutate: createPositionMutate, isLoading: loadingPositionCreate } = useMutation({
    mutationFn: (newPos: newPosition) => {
      const { project_id, ...rest } = newPos;
      return projectsApi.createPosition(project_id, rest);
    },
    onSuccess: (data) => {
      newSpecialist.forEach(({ spec, skills }) => {
        if (spec === data.specialization_id) {
          const formatSkills = skills.map(({ value }) => value);
          const updateSkills: updateSkills = {
            project_id: data.project_id,
            postiton_id: data.id,
            skills: formatSkills,
          };
          updateSkillsMutate(updateSkills);
        }
      });
    },
    onError: (e: Error) => {
      toast({
        title: 'Ошибка добавления позиции',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const { mutate: uploadProjectAvatar, isLoading: loadingUpdateAvatar } = useMutation({
    mutationFn: (data: UpdateProjectAvatarID & UpdateProjectAvatar) =>
      projectsApi.uploadProjectAvatar(data),
    onError: (e: Error) => {
      toast({
        title: 'Ошибка добавления аватара проекта',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });
  return {
    addProject,
    loadingAddProject,
    loadingUpdateSkill,
    loadingPositionCreate,
    loadingUpdateAvatar,
  };
};
