import { Flex, Link, Icon } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

interface LinkType {
  link: string;
}

export function SLink(props: LinkType) {
  const { link } = props;

  return (
    <Flex align="center" gap={1}>
      <Link lineHeight="120%" color="purple.600" fontSize="xs">
        {link}
      </Link>
      <Icon as={FiArrowUpRight} w={4} h={4} />
    </Flex>
  );
}
