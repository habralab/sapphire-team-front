import { create } from 'zustand';

interface FilterState {
  isFilterOpen: boolean;
  isSkillsSelectorOpen: boolean;
  checkedSkills: Selector[];
  setFilterStatus: () => void;
  setSkillsSelector: () => void;
  setCheckedSkill: (skill: string) => void;
}

interface Selector {
  name: string;
  state: boolean;
}

const dummySelectors = [
  { name: 'Figma', state: true },
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
];

export const useFilterStore = create<FilterState>((set, get) => ({
  isFilterOpen: false,
  isSkillsSelectorOpen: false,
  checkedSkills: dummySelectors,
  setFilterStatus: () => {
    set((state) => ({ isFilterOpen: !state.isFilterOpen }));
  },
  setSkillsSelector: () => {
    set((state) => ({ isSkillsSelectorOpen: !state.isSkillsSelectorOpen }));
  },
  setCheckedSkill: (skill) => {
    const ind = get().checkedSkills.findIndex((selector) => selector.name === skill);
    get().checkedSkills[ind] = {
      ...get().checkedSkills[ind],
      state: !get().checkedSkills[ind].state,
    };
    set((state) => ({ checkedSkills: [...state.checkedSkills] }));
    console.log(get().checkedSkills);
  },
}));
