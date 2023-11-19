import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
  IconButton,
  useToast,
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
  const toast = useToast();

  const { data: specGroup, isLoading: specGroupLoading } = useQuery({
    queryKey: ['specGroups'],
    queryFn: () => storageApi.getSpecGroups(),
    staleTime: Infinity,
  });

  const { data: specs, isLoading: specsLoading } = useQuery({
    queryKey: ['specs'],
    queryFn: () => storageApi.getSpecs(),
    onError: (e: Error) => {
      toast({
        title: 'Ошибка получения специализаций',
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
    staleTime: Infinity,
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
        specsLoading={specsLoading}
        specGroupLoading={specGroupLoading}
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
