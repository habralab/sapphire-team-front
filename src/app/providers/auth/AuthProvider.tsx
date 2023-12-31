import { useLoaderData } from 'react-router-dom';

import type { IsAuthResponse } from '~/shared/api/model';
import { AuthContext } from '~/shared/contexts';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const data = useLoaderData() as IsAuthResponse | null;

  const getAuth = (data: IsAuthResponse | null) => ({
    userId: data?.user_id,
    isAuth: !!data,
    isActivated: data?.is_activated,
  });

  return <AuthContext.Provider value={getAuth(data)}>{children}</AuthContext.Provider>;
}
