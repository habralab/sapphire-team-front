import { create } from 'zustand';

interface FilterState {
  isFilterOpen: boolean;
  setFilterStatus: (status: boolean) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  isFilterOpen: false,
  setFilterStatus: (status) => {
    set(() => ({ isFilterOpen: status }));
  },
}));
