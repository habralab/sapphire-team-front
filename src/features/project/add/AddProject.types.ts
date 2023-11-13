import { OptionBase } from 'chakra-react-select';

interface SelectOptions extends OptionBase {
  label: string;
  value: string;
}

export interface NewSpecialist {
  spec: string;
  skills: SelectOptions[];
  id: number;
}

export interface AddProjectForm {
  attachFile: string;
  description: string;
  title: string;
  date: string;
  pause: boolean;
  team: NewSpecialist[];
}
