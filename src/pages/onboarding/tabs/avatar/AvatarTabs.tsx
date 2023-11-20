import {
  Avatar,
  Center,
  FormControl,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';

export function AvatarTabs() {
  const [previewImg, setPrevievImg] = useState('');

  return (
    <Stack mt={10} spacing={0}>
      <Stack gap={4}>
        <Heading variant="h1">Добавьте своё фото</Heading>
        <Text color="gray.600">
          Фото выделит вас в списке кандидатов и добавит индивидуальность профилю
        </Text>
      </Stack>
      <FormControl display="flex" justifyContent="center">
        <Center borderRadius="full" w={44} h={44} position="relative" mt={28}>
          <Avatar name=" " src={previewImg} h={44} w={44} />
          <Icon
            as={MdPhotoCamera}
            position="absolute"
            bg="blackAlpha.500"
            color="white"
            w={6}
            h={6}
            border="4px"
            borderRadius="full"
            borderColor="transparent"
            boxSizing="content-box"
          />
          <Input
            h="full"
            type="file"
            accept="image/*"
            position="absolute"
            opacity={0}
            //   {...register('avatar', {
            //     onChange: (e: ChangeEvent<HTMLInputElement>) => {
            //       if (e.target.files?.length) {
            //         setPrevievImg(URL.createObjectURL(e.target.files[0]));
            //       }
            //     },
            //   })}
          />
        </Center>
      </FormControl>
    </Stack>
  );
}
