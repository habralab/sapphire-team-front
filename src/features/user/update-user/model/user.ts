import { GetUserResponse } from '~/shared/api/model';
import { nullToUndefined } from '~/shared/lib/form';
import { SelectOptions } from '~/shared/types';

export interface UserTypeForm {
  first_name: string;
  last_name: string;
  about: string;
  main_specialization_id: string;
  secondary_specialization_id: string;
  email: string;
  skills: SelectOptions[];
  avatar: FileList;
  specs: string[];
}

interface UserResponseToUserTypeProps {
  user: GetUserResponse;
  skills?: SelectOptions[];
}

export const userResponseToUserType = ({
  user,
  skills,
}: UserResponseToUserTypeProps) => ({
  ...nullToUndefined(user),
  specs: [user.main_specialization_id, user.secondary_specialization_id].filter(
    Boolean,
  ) as string[],
  skills: skills ?? [],
});
