import { Link, Icon } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link as ReactLink, LinkProps } from 'react-router-dom';

export function SLink(props: LinkProps) {
  return (
    <>
      <Link as={ReactLink} {...props} color="purple.600" />
      <Icon as={FiArrowUpRight} w={4} h={4} color="purple.600" verticalAlign="middle" />
    </>
  );
}
