import type { ImageProps } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import image from './image.svg';

export function DummyAvatar({ ...props }: ImageProps) {
  return <Image src={image} {...props} />;
}
