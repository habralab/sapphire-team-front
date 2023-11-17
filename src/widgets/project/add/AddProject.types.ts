import { OptionBase } from 'chakra-react-select';

interface SelectOptions extends OptionBase {
  label: string;
  value: string;
}

export interface NewSpecialist {
  spec: string;
  skills: SelectOptions[];
  id: string;
}

export interface AddProjectForm {
  attachFile: string;
  description: string;
  title: string;
  startDate: string;
  deadlineDate: string;
  pause: boolean;
  team: NewSpecialist[];
}
