import { act } from '@testing-library/react';
import { StateCreator } from 'zustand';

type ZustandModel = typeof import('zustand');

const storeResetFns = vi.hoisted(() => new Set<() => void>());

vi.mock('zustand', async (zustandOriginal: () => Promise<ZustandModel>) => {
  const zustand = await zustandOriginal();

  const createStore =
    () =>
    <S>(createState: StateCreator<S>) => {
      const store = zustand.createStore(createState);
      const initialState = store.getState();
      storeResetFns.add(() => {
        store.setState(initialState, true);
      });
      return store;
    };

  return { ...zustand, createStore };
});

beforeEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn();
    });
  });
});
