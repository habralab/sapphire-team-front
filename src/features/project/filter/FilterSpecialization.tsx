import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CloseButton,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { SearchInput } from '~/shared/ui/SearchInput';

interface Selector {
  name: string;
  state: boolean;
}

interface SpecsSelector {
  title: string;
  child: Selector[];
}

interface FilterSpecializationProps {
  isVisible: boolean;
  changeVisible: (status: boolean) => void;
  state: SpecsSelector[];
}

export const FilterSpecialization = (props: FilterSpecializationProps) => {
  const { isVisible, changeVisible, state } = props;
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <Modal
      onClose={() => {
        changeVisible(false);
      }}
      size="full"
      isOpen={isVisible}
    >
      <ModalOverlay />
      <ModalContent bg="bg" display="flex" alignItems="center">
        <Container maxW="md" flex="1">
          <Container bg="bg" position="sticky" top="0" zIndex={3} p={0} pt={3} pb={2}>
            <Flex alignItems="center" justifyContent="space-between" mb={3}>
              <Flex alignItems="center">
                <IconButton
                  onClick={() => {
                    changeVisible(false);
                  }}
                  variant="ghost"
                  aria-label="Close"
                  minW="fit-content"
                  mr={2}
                  icon={<Icon as={FiChevronLeft} w={5} h={5} />}
                />
                <Heading variant="h2" mb={0}>
                  Специализация
                </Heading>
              </Flex>
              <Button variant="flat" fontSize="sm" fontWeight="500" colorScheme="purple">
                Сбросить
              </Button>
            </Flex>
            <SearchInput
              ref={searchRef}
              placeholder="Найти специальность"
              onChange={(value) => {
                setSearch(value);
              }}
              value={search}
            />
          </Container>
          <Accordion allowToggle mb={4}>
            {state.map((spec, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize="sm"
                      fontWeight="500"
                    >
                      {spec.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={3}>
                  <Stack gap={0}>
                    {spec.child.map((selector) => (
                      <Checkbox
                        key={selector.name}
                        // onChange={(e) => {
                        //   handleSetCheckbox(spec.title, e.target.value);
                        // }}
                        p={4}
                        _hover={{
                          bg: 'gray.200',
                        }}
                        w="full"
                        py={2}
                        isChecked={selector.state}
                        value={selector.name}
                        variant="black"
                      >
                        <Text fontSize="sm">{selector.name}</Text>
                      </Checkbox>
                    ))}
                  </Stack>
                </AccordionPanel>
                <Divider width="90%" ml="auto" mr="auto" borderColor="gray.300" />
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
        <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
          <Button fontSize="sm" fontWeight="600" w="full">
            Применить
          </Button>
        </Container>
      </ModalContent>
    </Modal>
  );
};
