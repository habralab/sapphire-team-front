import { PATHS } from '~/shared/lib/router';

export const isBaseMiddleware = (path: string) => {
  return [PATHS.any, PATHS.root, PATHS.notFound].includes(path);
};
