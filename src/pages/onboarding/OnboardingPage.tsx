import { Navigate } from 'react-router-dom';

import { Onboarding } from '~/widgets/onboarding';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export function OnboardingPage() {
  const user = useAuth();
  return user.userId && !user.isActivated ? (
    <Onboarding userId={user.userId} />
  ) : (
    <Navigate to={PATHS.notFound} replace />
  );
}
