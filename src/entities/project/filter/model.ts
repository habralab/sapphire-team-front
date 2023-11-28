import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { GetUserResponse } from '~/shared/api/model';
import { SelectOptions } from '~/shared/types';

export interface FilterType {
  specs: string[];
  skills: SelectOptions[];
  date: string;
  initialized?: boolean;
}

export const defaultFilter: FilterType = {
  specs: [],
  skills: [],
  date: '',
  initialized: false,
};

interface FilterStore {
  filter: FilterType;
  updateFilter: (filter: Partial<FilterType>) => void;
  removeFilter: () => void;
  initialStore: (user: GetUserResponse) => void;
}

export const useFilterStore = create(
  persist<FilterStore>(
    (set) => ({
      filter: {
        ...defaultFilter,
      },
      updateFilter: (value) => {
        set((state) => ({
          filter: { ...state.filter, ...value },
        }));
      },
      initialStore: (user) => {
        set((state) => ({
          filter: {
            ...state.filter,
            initialized: true,
            specs: [user.main_specialization_id, user.secondary_specialization_id].filter(
              Boolean,
            ) as string[],
          },
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
);
