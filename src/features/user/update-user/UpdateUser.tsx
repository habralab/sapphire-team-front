import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Icon,
  IconButton,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { BsPlus } from 'react-icons/bs';

import { STextarea } from '~/shared/ui/STextarea';

export function UpdateUser() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const maxLength = 300;

  const addAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setAvatar(selectedFile);
    }
  };

  return (
    <Flex direction="column" gap={6}>
      <Flex direction="column" gap={4}>
        <Heading variant="h3">Фото</Heading>
        <Flex
          w="full"
          fontWeight="normal"
          fontSize="sm"
          py={2}
          px={5}
          bg="white"
          borderRadius="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <Input
            type="file"
            accept="image/*"
            capture="user"
            position="absolute"
            opacity={0}
            onChange={addAvatar}
          />
          <Text>Добавить фотографию</Text>
          <Icon as={BsPlus} fontSize="2xl" />
        </Flex>
        {avatar && (
          <Tag
            w="fit-content"
            size="sm"
            bg="gray.300"
            py={1}
            px={2}
            borderRadius="lg"
            fontWeight="medium"
          >
            <TagLabel>фотография</TagLabel>
            <IconButton
              onClick={() => {
                setAvatar(null);
              }}
              aria-label="Close"
              variant="ghost"
              flexShrink="0"
              minW="none"
              height="none"
              fontWeight="normal"
              icon={<SmallCloseIcon boxSize={4} />}
            />
          </Tag>
        )}
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading variant="h3">Имя</Heading>
        <Input
          placeholder="Как вас зовут?"
          py={4}
          px={5}
          bg="white"
          borderRadius="full"
        />
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading variant="h3">О себе</Heading>
        <STextarea maxLength={maxLength} />
      </Flex>
      <Button fontWeight="semibold" w="full">
        Сохранить
      </Button>
    </Flex>
  );
}
