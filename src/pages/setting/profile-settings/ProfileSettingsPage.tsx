import { Alert, Container, Flex, Heading } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { GoBack } from '~/shared/ui/GoBack';

import { ProfileSettingsUser } from './ProfileSettingsUser';

export function ProfileSettingsPage() {
  const { isActivated, userId } = useAuth();

  if (!userId) return <Navigate to={PATHS.notFound} replace />;

  return (
    <Container maxW="md" px={5} w="full">
      <Flex alignItems="center" my={6} gap={2}>
        <GoBack />
        <Heading variant="h2" as="h1" mb={0}>
          Профиль
        </Heading>
      </Flex>
      {!isActivated && (
        <Alert status="warning" mb={6}>
          Дальнейшая работа невозможна.
          <br />
          Заполните, пожалуйста, обязательные поля.
        </Alert>
      )}
      {userId && <ProfileSettingsUser userId={userId} />}
    </Container>
  );
}
