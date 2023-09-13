import { Text, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Text>
      Страница не найдена,{' '}
      <Link as={ReactRouterLink} to="/">
        перейти на главную
      </Link>
    </Text>
  );
};
