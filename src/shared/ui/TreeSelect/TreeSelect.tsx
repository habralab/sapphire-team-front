import { CloseIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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

import { useHorizontalScroll, useIsMobile } from '~/shared/hooks';
import { SearchInput } from '~/shared/ui/SearchInput';

export const TreeSelect = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();
  const ref = useHorizontalScroll();

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
        <Box pos="relative" overflowY="hidden">
          <Flex
            overflowY="hidden"
            overflowX="scroll"
            height="full"
            ref={ref}
            css={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            bg="white"
            borderRadius="full"
            border="1px"
            borderColor="inherit"
            alignItems="center"
            userSelect="none"
            {...effect}
            px={3}
            onClick={() => {
              searchRef.current?.focus();
            }}
            _empty={{
              _before: {
                color: 'gray.400',
                content: '"Выберите специальность"',
              },
            }}
          >
            <HStack>
              <Tag
                minW="auto"
                bg={'gray.300'}
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="normal"
              >
                Дизайнер1
              </Tag>
              <Tag
                minW="auto"
                bg={'gray.300'}
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="normal"
              >
                Дизайнер2
              </Tag>
              <Tag
                minW="auto"
                bg={'gray.300'}
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="normal"
              >
                Дизайнер3
              </Tag>
              <Tag
                minW="auto"
                bg={'gray.300'}
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="normal"
              >
                Дизайнер4
              </Tag>
              <Tag
                minW="auto"
                bg={'gray.300'}
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="normal"
              >
                Дизайнер5
              </Tag>
              <Tag
                minW="auto"
                bg={'gray.300'}
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="normal"
              >
                Дизайнер
              </Tag>
            </HStack>
          </Flex>
        </Box>
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
