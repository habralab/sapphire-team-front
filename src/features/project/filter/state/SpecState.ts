import _ from 'lodash';
import { create } from 'zustand';

interface SpecsFilterState {
  specs: SpecsSelector[];
  saveSpecs: (newSpecs: SpecsSelector[]) => void;
  resetSpecs: () => void;
}

interface Selector {
  name: string;
  state: boolean;
}

export interface SpecsSelector {
  title: string;
  child: Selector[];
}

interface InitialStateSpecs {
  specs: SpecsSelector[];
}

const initialStateSpecs: InitialStateSpecs = {
  specs: [
    {
      title: 'Разработка',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Тестирование',
      child: [
        { name: 'Tilda', state: false },
        { name: 'Adobe after effect', state: false },
        { name: 'Новое 1', state: false },
        { name: 'Новое 2', state: false },
        { name: 'Новое 3', state: false },
        { name: 'Новое 4', state: false },
        { name: 'Новое 5', state: false },
      ],
    },
    {
      title: 'Аналитика',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Дизайн',
      child: [
        { name: 'Tilda', state: false },
        { name: 'Adobe after effect', state: false },
        { name: 'Новое 1', state: false },
        { name: 'Новое 2', state: false },
        { name: 'Новое 3', state: false },
        { name: 'Новое 4', state: false },
        { name: 'Новое 5', state: false },
      ],
    },
    {
      title: 'Менеджмент',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Информационнная безопасность',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Искусственный интеллект',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Поддержка',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Маркетинг',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Администрирование',
      child: [
        { name: 'Web-дизайн', state: false },
        { name: 'Прототипирование', state: false },
        { name: 'Графический дизайн', state: false },
        { name: 'HTML', state: false },
        { name: 'CSS', state: false },
        { name: 'Sketch', state: false },
      ],
    },
    {
      title: 'Контент',
      child: [
        { name: 'Tilda', state: false },
        { name: 'Adobe after effect', state: false },
        { name: 'Новое 1', state: false },
        { name: 'Новое 2', state: false },
        { name: 'Новое 3', state: false },
        { name: 'Новое 4', state: false },
        { name: 'Новое 5', state: false },
      ],
    },
    {
      title: 'HR',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Офис',
      child: [
        { name: 'Web-дизайн', state: false },
        { name: 'Прототипирование', state: false },
        { name: 'Графический дизайн', state: false },
        { name: 'HTML', state: false },
        { name: 'CSS', state: false },
        { name: 'Sketch', state: false },
      ],
    },
    {
      title: 'Зерокодинг',
      child: [
        { name: 'Figma', state: false },
        { name: 'UX', state: false },
        { name: 'UI', state: false },
        { name: 'Adobe Photoshop', state: false },
        { name: 'Дизайн интерфейсов', state: false },
        { name: 'Adobe Illustrator', state: false },
      ],
    },
    {
      title: 'Тестовая категория',
      child: [
        { name: 'Tilda', state: false },
        { name: 'Adobe after effect', state: false },
        { name: 'Новое 1', state: false },
        { name: 'Новое 2', state: false },
        { name: 'Новое 3', state: false },
        { name: 'Новое 4', state: false },
        { name: 'Новое 5', state: false },
      ],
    },
    {
      title: 'Тестовая категория 2',
      child: [
        { name: 'Web-дизайн', state: false },
        { name: 'Прототипирование', state: false },
        { name: 'Графический дизайн', state: false },
        { name: 'HTML', state: false },
        { name: 'CSS', state: false },
        { name: 'Sketch', state: false },
      ],
    },
  ],
};

export const useSpecsFilterStore = create<SpecsFilterState>((set, get) => ({
  ...initialStateSpecs,
  saveSpecs: (newSpecs) => {
    set(() => ({ specs: newSpecs }));
  },
  resetSpecs: () => {
    set(initialStateSpecs);
  },
}));
