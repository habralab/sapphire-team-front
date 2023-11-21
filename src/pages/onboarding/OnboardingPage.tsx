import { Onboarding } from '~/widgets/onboarding';

import { BasePageProps } from '~/shared/lib/router';

export function OnboardingPage({ user }: BasePageProps) {
  return user.userId ? <Onboarding userId={user.userId} /> : null;
}
