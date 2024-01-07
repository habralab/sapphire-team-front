import {
  Accordion,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { useGetSpecsGroups } from '~/entities/storage';

import { SearchInput } from '~/shared/ui/SearchInput';

import { GroupItem } from './GroupItem';

export const Filter = () => {
  const [searchText, setSearchText] = useState('');
  const { data: specs } = useGetSpecsGroups();

  return (
    <Container maxW="md">
      <Box bg="bg" position="sticky" top="0" zIndex={1} pt={3} pb={4}>
        <Flex justifyContent="space-between" mb={3}>
          <Flex alignItems="center">
            <IconButton
              variant="ghost"
              aria-label="Close"
              minW="fit-content"
              mr={2}
              icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
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
          placeholder="Найти специальность"
          onChange={(value) => {
            setSearchText(value);
          }}
          value={searchText}
        />
      </Box>
      <Accordion allowMultiple bg="white" borderRadius="2xl">
        {specs?.map((group) => (
          <GroupItem key={group.id} id={group.id} name={group.name} />
        ))}
      </Accordion>
    </Container>
  );
};
