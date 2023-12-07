import { api } from '~/shared/api';
import { ApiContext } from '~/shared/contexts';

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
