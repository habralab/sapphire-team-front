import { Search2Icon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react';

interface SearchProps {
  value: string;
  setValue: (value: string) => void;
}

export function SearchInput(props: SearchProps) {
  const { value, setValue } = props;

  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={Search2Icon} color="gray.400" w={4} h={4} />
      </InputLeftElement>
      <Input
        placeholder="Поиск в чатах"
        borderRadius="full"
        bg="gray.100"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </InputGroup>
  );
}
