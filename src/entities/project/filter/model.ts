import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { GetUserResponse } from '~/shared/api/model';
import { SelectOptions } from '~/shared/types';

export interface FilterType {
  specs: string[];
  skills: SelectOptions[];
  date: string;
}

export const defaultFilter: FilterType = {
  specs: [],
  skills: [],
  date: '',
};

interface FilterStore {
  filter: FilterType;
  updateFilter: (filter: Partial<FilterType>) => void;
  removeFilter: () => void;
}

export const useFilterStore = (user?: GetUserResponse) =>
  create(
    persist<FilterStore>(
      (set) => ({
        filter: {
          ...defaultFilter,
          specs: [user?.main_specialization_id, user?.secondary_specialization_id].filter(
            Boolean,
          ) as string[],
        },
        updateFilter: (value: Partial<FilterType>) => {
          set((state) => ({
            filter: { ...state.filter, ...value },
          }));
        },
        removeFilter: () => {
          set(() => ({ filter: defaultFilter }));
        },
      }),
      {
        name: 'filter',
      },
    ),
  )();
