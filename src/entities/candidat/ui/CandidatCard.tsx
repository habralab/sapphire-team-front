import { Avatar, Stack, Text, ButtonGroup, Center, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CandidatType {
  id: string;
  text: string;
  name: string;
}

interface Props {
  reject: ReactNode;
  add: ReactNode;
  candidat: CandidatType;
}

export default function CandidatCard(props: Props) {
  const { reject, add, candidat } = props;

  return (
    <Center>
      <Stack
        spacing={2}
        direction="row"
        display="flex"
        align="center"
        justifyContent="space-between"
        w="6xl"
      >
        <Box display="flex" alignItems="center" gap="5">
          <Avatar bg="teal.500" size="xl" as="b" />
          <Text fontSize="lg" textAlign="center">
            {candidat.name}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="10">
          <Text fontSize="18px">{candidat.text}</Text>
          <ButtonGroup gap="3">
            {add}
            {reject}
          </ButtonGroup>
        </Box>
      </Stack>
    </Center>
  );
}
