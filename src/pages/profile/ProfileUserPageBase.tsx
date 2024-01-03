import { Flex, Heading, Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { ProfileCard, ProfileCardNotAuth } from '~/entities/user';

import { GoBack } from '~/shared/ui/GoBack';

import { ProfileTabs } from './ProfileTabs';
import { NotAuthTab } from './tabs/not-auth';

export function ProfileUserPageBase() {
  const { id } = useParams();

  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" mt={4} mb={16} h={42} gap={2}>
        <GoBack prevCount={-2} />
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      {id ? <ProfileCard userId={id} /> : <ProfileCardNotAuth />}
      {id ? <ProfileTabs userId={id} /> : <NotAuthTab />}
    </Container>
  );
}
