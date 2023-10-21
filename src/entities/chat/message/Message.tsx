import { VStack, HStack, Icon, Text } from '@chakra-ui/react';
import { BsCheck2All } from 'react-icons/bs';

type Variants = 'incoming' | 'outgoing';

interface MessageProps {
  children: string;
  variant: Variants;
}

export function Message(props: MessageProps) {
  const { children, variant } = props;

  return (
    <VStack maxW="70%" alignItems={variant === 'incoming' ? 'start' : 'end'}>
      <Text
        bg={variant === 'incoming' ? 'gray.300' : 'purple.600'}
        color={variant === 'incoming' ? 'gray.900' : 'white'}
        p={3}
        borderRadius="2xl"
      >
        {children}
      </Text>
      <HStack alignItems="center">
        <Text variant="caption" mb={0}>
          23:59
        </Text>
        <Icon as={BsCheck2All} color="purple.600" />
      </HStack>
    </VStack>
  );
}
