/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Flex, Image, Text, Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

type DummyPageVariant = 'project' | 'notification';
type DummyPageVariantButtonCount = 1 | 2;

import notificatios from './notifications.svg';
import projects from './projects.svg';

interface DummyPageProps {
  heading: string;
  children: string;
  variant: DummyPageVariant;
  buttonCount?: DummyPageVariantButtonCount;
}

export function Dummy({ children, heading, variant, buttonCount }: DummyPageProps) {
  const navigate = useNavigate();

  const image = () => {
    if (variant === 'project') {
      return projects;
    } else if (variant === 'notification') {
      return notificatios;
    }
  };

  return (
    <Flex
      bg="white"
      borderRadius="2xl"
      p={5}
      direction="column"
      alignItems="center"
      gap={5}
    >
      <Image src={image()} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        {heading}
      </Text>
      <Text color="gray.700" textAlign="center">
        {children}
      </Text>
      {buttonCount === 2 && (
        <Stack spacing={0} gap={2} w="full">
          <Button
            type="button"
            onClick={() => {
              navigate(PATHS.addProject);
            }}
            fontSize="sm"
            fontWeight="600"
          >
            Создать свой проект
          </Button>
          <Button
            variant="light"
            type="button"
            onClick={() => {
              navigate(PATHS.search);
            }}
            fontSize="sm"
            fontWeight="600"
          >
            Найти проект
          </Button>
        </Stack>
      )}
    </Flex>
  );
}
