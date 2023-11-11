import { useAuth } from '~/shared/hooks';

import { AboutMeProfile } from './AboutMeProfile';

export function AboutMe() {
  const { userId } = useAuth();

  return userId ? <AboutMeProfile userId={userId} /> : null;
}
