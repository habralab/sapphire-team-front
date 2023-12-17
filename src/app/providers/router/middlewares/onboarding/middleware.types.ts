import type { ReactElement } from 'react';

export type Middleware = (
  path: string,
  component: ReactElement | null,
) => ReactElement | null;
