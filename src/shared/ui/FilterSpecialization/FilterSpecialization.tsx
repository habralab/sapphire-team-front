import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useGetSpecs, useGetSpecsGroups } from '~/entities/storage';

import { useApi } from '~/shared/hooks';

import { FilterSpecializationModal } from './FilterSpecializationModal';

interface FilterSpecializationProps {
  singleChecked?: boolean;
  doubleChecked?: boolean;
  userSpecs: string[];
  setUserSpecs: (userSpecs: string[]) => void;
}

export const FilterSpecialization = ({
  singleChecked,
  userSpecs,
  setUserSpecs,
  doubleChecked,
}: FilterSpecializationProps) => {
  const [specFilter, setSpecFilter] = useState(false);
  const { storageApi } = useApi();
  const [searchText, setSearchText] = useState('');

  const { data: specGroup } = useGetSpecsGroups();
  // const { data: specs } = useGetSpecs();

  // const { data: specGroup, isFetching: specGroupLoading } = useQuery({
  //   queryKey: ['specGroups'],
  //   queryFn: () => storageApi.getSpecGroups(),
  //   staleTime: Infinity,
  // });

  const { data: specs } = useGetSpecs({
    query_text: searchText,
  });

  const deleteSpecFilter = (id: string) => {
    const newUserSpecs = userSpecs.filter((specId) => specId !== id);
    setUserSpecs(newUserSpecs);
  };

  return (
    <>
      <InputGroup mb={4}>
        <Input
          bg="white"
          borderRadius="full"
          fontSize="md"
          readOnly
          placeholder="Например, Фронтенд разработчик"
          onClick={() => {
            setSpecFilter(true);
          }}
        />
        <InputRightElement pointerEvents="none">
          <ChevronDownIcon fontSize="xl" />
        </InputRightElement>
      </InputGroup>
      <Flex flexWrap="wrap" gap={2}>
        {specs?.map(
          ({ id, name }) =>
            userSpecs.includes(id) && (
              <Tag
                key={id}
                size="sm"
                bg="gray.300"
                py={1}
                px={2}
                borderRadius="lg"
                fontWeight="medium"
              >
                <TagLabel>{name}</TagLabel>
                <IconButton
                  onClick={() => {
                    deleteSpecFilter(id);
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
            ),
        )}
      </Flex>

      <FilterSpecializationModal
        isVisible={specFilter}
        changeVisible={setSpecFilter}
        stateGroup={specGroup}
        state={specs}
        userFilter={userSpecs}
        resetSpec={() => {
          setUserSpecs([]);
        }}
        searchText={searchText}
        setSearchText={setSearchText}
        saveSpec={setUserSpecs}
        singleChecked={singleChecked}
        doubleChecked={doubleChecked}
      />
    </>
  );
};
