import type { SelectOptions } from '~/shared/types';

export interface CreateUserType {
  first_name: string;
  last_name: string;
  avatar: FileList | null;
  about: string | null;
  telegram: string;
  main_specialization_id: string | null;
  secondary_specialization_id: string | null;
  specs: string[];
  skills: SelectOptions[];
}
