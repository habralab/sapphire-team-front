import { GetUserResponse, GetUserSkills } from '~/shared/api/types';
import { nullToUndefined } from '~/shared/lib/form';

export interface UserTypeForm {
  first_name: string;
  last_name: string;
  about: string;
  main_specialization_id: string;
  secondary_specialization_id: string;
  email: string;
  skills: string[];
  avatar: FileList;
}

interface UserResponseToUserTypeProps {
  user: GetUserResponse;
  skills?: GetUserSkills;
}

export const userResponseToUserType = ({
  user,
  skills,
}: UserResponseToUserTypeProps) => ({
  ...nullToUndefined(user),
  skills: skills,
});
