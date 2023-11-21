import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { useIsMobile } from '~/shared/hooks';
import { BasePageProps, PATHS } from '~/shared/lib/router';

import NotFound from './notFound.svg';

export const NotFoundPage = ({ user }: BasePageProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex="1"
      mb="4"
    >
      <Heading
        variant="h1"
        as="h1"
        fontSize={isMobile ? '6xl' : '9xl'}
        mt={isMobile ? 16 : 28}
        position="relative"
        _after={{
          content: `url(${NotFound})`,
          position: 'absolute',
          width: isMobile ? '85px' : '120px',
          top: isMobile ? '-14' : '-20',
          left: isMobile ? '-8' : '-14',
        }}
        textAlign="center"
        mb={4}
      >
        404
      </Heading>
      <Heading
        as="h2"
        variant="h2"
        fontSize={isMobile ? 'xl' : '4xl'}
        textAlign="center"
        pb={10}
      >
        Упс!.. Похоже, такой страницы не существует
      </Heading>
      <Button
        aria-label="main-page"
        onClick={() => {
          if (!user.isActivated && user.isAuth) {
            navigate(PATHS.onboarding);
          } else {
            navigate(PATHS.root);
          }
        }}
        maxW="100%"
        padding={isMobile ? 5 : 7}
        fontSize={isMobile ? 'sm' : 'md'}
        fontWeight="600"
        rightIcon={<Icon as={BsArrowRightShort} fontSize="2xl" />}
      >
        {!user.isActivated && user.isAuth
          ? 'Пройти онбординг'
          : 'Вернуться на главную страницу'}
      </Button>
    </Flex>
  );
};
