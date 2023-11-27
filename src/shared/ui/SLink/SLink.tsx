import { Link as ChakraLink, Icon, Flex, styled } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link as ReactLink, LinkProps } from 'react-router-dom';

type SLinkProps = {
  external?: boolean;
  to: string;
} & LinkProps;

const StyledLink = styled(ChakraLink, {
  baseStyle: {
    color: 'purple.600',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    overflowWrap: 'anywhere',
  },
});

const icon = (
  <Icon as={FiArrowUpRight} w={4} h={4} color="purple.600" verticalAlign="middle" />
);

export function SLink({ external, to, children, ...props }: SLinkProps) {
  const mainProps = external
    ? {
        href: to,
      }
    : {
        as: ReactLink,
        to,
      };

  return (
    <Flex alignItems="center" gap={1}>
      <StyledLink {...mainProps} {...props}>
        {children}
        {icon}
      </StyledLink>
    </Flex>
  );
}
