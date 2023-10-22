import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

import NotFound from './notFound.svg';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" flex="1">
      <Heading
        variant="h1"
        as="h1"
        fontSize={['6xl', '8xl', '9xl']}
        mt={{
          base: '40px',
          md: '46px',
        }}
        position="relative"
        _after={{
          base: {
            content: `url(${NotFound})`,
            position: 'absolute',
            width: '85px',
            top: '-14',
            left: '-8',
          },
          md: {
            width: '120px !important',
            top: '-20 !important',
            left: '-14 !important',
          },
        }}
        textAlign="center"
        mb={4}
      >
        404
      </Heading>
      <Heading as="h2" fontSize={['xl', '2xl', '4xl']} textAlign="center" pb={10}>
        Упс!.. Похоже, такой страницы не существует
      </Heading>
      <Button
        aria-label="main-page"
        onClick={() => {
          navigate(PATHS.root);
        }}
        maxW="100%"
        padding={[5, 5, 7]}
        fontSize={['sm', 'sm', 'md']}
        fontWeight="600"
        rightIcon={<Icon as={BsArrowRightShort} fontSize="2xl" />}
      >
        Вернуться на главную страницу
      </Button>
    </Flex>
  );
};
