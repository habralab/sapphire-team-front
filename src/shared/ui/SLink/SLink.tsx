import { Link, Icon, Flex } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link as ReactLink, LinkProps } from 'react-router-dom';

type SLinkProps = {
  external?: boolean;
  to: string;
} & LinkProps;

export function SLink({ external, to, ...props }: SLinkProps) {
  let link = <Link as={ReactLink} to={to} {...props} color="purple.600" />;

  if (external) {
    link = <Link href={to} {...props} color="purple.600" />;
  }
  return (
    <Flex alignItems="center" gap={1}>
      {link}
      <Icon as={FiArrowUpRight} w={4} h={4} color="purple.600" verticalAlign="middle" />
    </Flex>
  );
}
