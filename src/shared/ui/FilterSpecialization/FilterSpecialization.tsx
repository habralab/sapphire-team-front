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
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useApi } from '~/shared/hooks';

import { FilterSpecializationModal } from './FilterSpecializationModal';

interface FilterSpecializationProps {
  singleChecked?: boolean;
  userSpecs: string[];
  setUserSpecs: (userSpecs: string[]) => void;
}

export const FilterSpecialization = ({
  singleChecked,
  userSpecs,
  setUserSpecs,
}: FilterSpecializationProps) => {
  const [specFilter, setSpecFilter] = useState(false);
  const { storageApi } = useApi();

  const { data: specGroup } = useQuery({
    queryKey: ['specGroups'],
    queryFn: () => storageApi.getSpecGroups(),
    staleTime: 5000,
  });

  const { data: specs } = useQuery({
    queryKey: ['specs'],
    queryFn: () => storageApi.getSpecs(),
    staleTime: 5000,
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
          fontSize="sm"
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
        {specs?.data.map(
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
        stateGroup={specGroup?.data}
        state={specs?.data}
        userFilter={userSpecs}
        resetSpec={() => {
          setUserSpecs([]);
        }}
        saveSpec={setUserSpecs}
        singleChecked={singleChecked}
      />
    </>
  );
};
