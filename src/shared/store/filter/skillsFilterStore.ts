import { create } from 'zustand';

interface SkillsFilterStore {
  isSkillsSelectorOpen: boolean;
  skills: Selector[];
  setVisibleSkillsSelector: (status: boolean) => void;
  saveSkills: (newSkills: Selector[]) => void;
  setCount: () => number;
  resetSkills: () => void;
}

export interface Selector {
  name: string;
  state: boolean;
}

interface InitialStateSkills {
  skills: Selector[];
}

const initialStateSkills: InitialStateSkills = {
  skills: [
    { name: 'Figma', state: false },
    { name: 'UX', state: false },
    { name: 'UI', state: false },
    { name: 'Adobe Photoshop', state: false },
    { name: 'Дизайн интерфейсов', state: false },
    { name: 'Adobe Illustrator', state: false },
    { name: 'Web-дизайн', state: false },
    { name: 'Прототипирование', state: false },
    { name: 'Графический дизайн', state: false },
    { name: 'HTML', state: false },
    { name: 'CSS', state: false },
    { name: 'Sketch', state: false },
    { name: 'Tilda', state: false },
    { name: 'Adobe after effect', state: false },
    { name: 'Новое 1', state: false },
    { name: 'Новое 2', state: false },
    { name: 'Новое 3', state: false },
    { name: 'Новое 4', state: false },
    { name: 'Новое 5', state: false },
  ],
};

export const useSkillsFilterStore = create<SkillsFilterStore>((set, get) => ({
  ...initialStateSkills,
  isSkillsSelectorOpen: false,
  setVisibleSkillsSelector: (status) => {
    set(() => ({ isSkillsSelectorOpen: status }));
  },
  saveSkills: (newSkills) => {
    set(() => ({ skills: newSkills }));
  },
  setCount: () => get().skills.filter(({ state }) => state).length,
  resetSkills: () => {
    set(initialStateSkills);
  },
}));
