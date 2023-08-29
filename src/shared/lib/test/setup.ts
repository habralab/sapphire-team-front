import '@testing-library/jest-dom';

import { act, cleanup } from '@testing-library/react';

import { afterEach, vi } from 'vitest';
import { StateCreator } from 'zustand';
import { server } from '@/shared/api/mock';

type ZustandModel = typeof import('zustand');

const storeResetFns = vi.hoisted(() => new Set<() => void>());

vi.mock('zustand', async (zustandOriginal: () => Promise<ZustandModel>) => {
  const zustand = await zustandOriginal();

  const createStore =
    () =>
    <S>(createState: StateCreator<S>) => {
      const store = zustand.createStore(createState);
      const initialState = store.getState();
      storeResetFns.add(() => store.setState(initialState, true));
      return store;
    };

  return { ...zustand, createStore };
});

beforeAll(() => server.listen());

beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
  vi.clearAllMocks();
});

afterAll(() => server.close());
