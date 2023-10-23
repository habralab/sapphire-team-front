import { CloseIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  Tag,
  VStack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { useIsMobile } from '~/shared/hooks';
import { SearchInput } from '~/shared/ui/SearchInput';

export const TreeSelect = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();
  const effect = isMobile
    ? {
        _active: {
          borderColor: 'blue.500',
        },
      }
    : {
        _hover: {
          borderColor: 'blue.500',
        },
      };
  return (
    <Stack gap={2}>
      <HStack alignItems="stretch">
        <Flex
          overflow="hidden"
          pos="relative"
          _after={{
            pos: 'absolute',
            right: 0,
            content: '""',
            display: 'block',
            padding: 2,
            height: '100%',
            bg: 'white',
          }}
          bg="white"
          borderRadius="full"
          border="1px"
          borderColor="inherit"
          alignItems="center"
          userSelect="none"
          {...effect}
          px={3}
          _empty={{
            _before: {
              color: 'gray.400',
              content: '"Выберите специальность"',
            },
          }}
          onClick={() => {
            searchRef.current?.focus();
          }}
        >
          <HStack>
            <Tag
              minW="auto"
              bg={'gray.300'}
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              Дизайнер
            </Tag>
            <Tag
              minW="auto"
              bg={'gray.300'}
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              Дизайнер
            </Tag>
            <Tag
              minW="auto"
              bg={'gray.300'}
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              Дизайнер
            </Tag>
            <Tag
              minW="auto"
              bg={'gray.300'}
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              Дизайнер
            </Tag>
            <Tag
              minW="auto"
              bg={'gray.300'}
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              Дизайнер
            </Tag>
            <Tag
              minW="auto"
              bg={'gray.300'}
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              Дизайнер
            </Tag>
          </HStack>
        </Flex>
        <IconButton
          aria-label="clear"
          onClick={() => {
            setSearch('');
          }}
          icon={<CloseIcon fontSize="sm" />}
        />
      </HStack>
      <SearchInput
        ref={searchRef}
        placeholder="Найти специальность"
        onChange={(value) => {
          setSearch(value);
        }}
        value={search}
      />
      <Accordion
        allowMultiple
        borderRadius="2xl"
        bg="white"
        minH="150px"
        h={'calc(100vh - 280px)'}
        maxH="260px"
        overflow="auto"
      >
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading fontWeight="normal" size="md" as="h2" flex={1} textAlign="left">
              Дизайн
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup variant="black" colorScheme="purple">
              <VStack alignItems="start" spacing={0}>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
                <Checkbox
                  p={4}
                  _hover={{
                    bg: 'gray.200',
                  }}
                  w="full"
                  py={2}
                >
                  Figma
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};
