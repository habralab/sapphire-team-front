import { Divider as ChakraDivider, DividerProps } from '@chakra-ui/react';

export const Divider = (props: DividerProps) => {
  return <ChakraDivider borderColor="gray.300" {...props} />;
};
