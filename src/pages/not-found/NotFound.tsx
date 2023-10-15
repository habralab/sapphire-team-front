import { Flex, Heading, Icon, IconButton, Text } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

import NotFound from './notFound.svg';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Flex height="100vh" direction="column" justifyContent="center" alignItems="center">
      <Heading
        variant="h1"
        as="h1"
        fontSize={['8xl', '8xl', '9xl']}
        mb={4}
        textAlign="center"
        position="relative"
        _after={{
          base: {
            content: `url(${NotFound})`,
            position: 'absolute',
            top: '-14',
            left: '-6',
          },
          md: {
            top: '-20 !important',
            left: '-10 !important',
          },
        }}
      >
        404
      </Heading>
      <Heading as="h2" fontSize={['2xl', '2xl', '4xl']} textAlign="center" pb={10}>
        Упс!.. Похоже, такой страницы не существует
      </Heading>
      <IconButton
        aria-label="main-page"
        onClick={() => {
          navigate(PATHS.root);
        }}
        padding={7}
        maxW={'sm'}
        icon={
          <Flex fontSize={['sm', 'sm', 'md']} fontWeight="normal" gap={2}>
            <Text lineHeight="160%">Вернуться на главную страницу</Text>
            <Icon as={BsArrowRightShort} />
          </Flex>
        }
      />
    </Flex>
  );
};
