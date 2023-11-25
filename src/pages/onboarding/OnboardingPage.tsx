import { Navigate } from 'react-router-dom';

import { Onboarding } from '~/widgets/onboarding';

import { BasePageProps, PATHS } from '~/shared/lib/router';

export function OnboardingPage({ user }: BasePageProps) {
  return user.userId && !user.isActivated ? (
    <Onboarding userId={user.userId} />
  ) : (
    <Navigate to={PATHS.notFound} replace />
  );
}
