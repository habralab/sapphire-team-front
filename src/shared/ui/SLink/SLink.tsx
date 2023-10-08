import { Flex, Link, Icon } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link as ReactLink, LinkProps } from 'react-router-dom';

export function SLink(props: LinkProps) {
  return (
    <Flex align="center" gap={1}>
      <Link as={ReactLink} {...props} color="purple.600" fontSize="xs" />
      <Icon as={FiArrowUpRight} w={4} h={4} />
    </Flex>
  );
}
