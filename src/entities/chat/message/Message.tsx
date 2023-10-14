import { VStack, HStack, Icon } from '@chakra-ui/react';
import { BsCheck2All } from 'react-icons/bs';

import { SText } from '~/shared/ui/SText';

type Variants = 'incoming' | 'outgoing';

interface MessageProps {
  children: string;
  variant: Variants;
}

export function Message(props: MessageProps) {
  const { children, variant } = props;

  return (
    <VStack maxW="70%" alignItems={variant === 'incoming' ? 'start' : 'end'}>
      <SText
        bg={variant === 'incoming' ? 'gray.100' : 'purple.600'}
        color={variant === 'incoming' ? 'gray.900' : 'white'}
        p={4}
        borderRadius="2xl"
      >
        {children}
      </SText>
      <HStack alignItems="center">
        <SText variant="caption" mb={0}>
          23:59
        </SText>
        <Icon as={BsCheck2All} color="purple.600" w={4} h={4} />
      </HStack>
    </VStack>
  );
}
