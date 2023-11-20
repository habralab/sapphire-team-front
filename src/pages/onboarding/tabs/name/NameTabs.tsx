import {
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

export function NameTabs() {
  return (
    <Stack mt={10} gap={6}>
      <Stack gap={4}>
        <Heading variant="h1">Как вас зовут?</Heading>
        <Text color="gray.600">Имя и фамилия будут отображаться в Профиле</Text>
      </Stack>
      <Stack gap={4}>
        <FormControl isRequired>
          <Input placeholder="Ваше имя*" py={4} px={5} bg="white" borderRadius="full" />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Ваша фамилия*"
            py={4}
            px={5}
            bg="white"
            borderRadius="full"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
      </Stack>
    </Stack>
  );
}
