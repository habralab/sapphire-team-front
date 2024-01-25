import { Skeleton, HStack } from '@chakra-ui/react';

import { useGetSpecs } from '~/entities/storage';

import { SpecItem } from './SpecItem';

interface SpecsGroupsProps {
  id: string;
  tempSpec: string[];
}

export const SpecsGroups = ({ id, tempSpec }: SpecsGroupsProps) => {
  const { data: specs, isLoading } = useGetSpecs({ group_id: id });

  return isLoading ? (
    <HStack p={2} px={4}>
      <Skeleton height="17.5px" borderRadius="md" w="17.5px"></Skeleton>
      <Skeleton height="17.5px" borderRadius="md" w="full" />
    </HStack>
  ) : (
    specs?.map((spec) => (
      <SpecItem id={spec.id} name={spec.name} key={spec.id} tempSpec={tempSpec} />
    ))
  );
};

export default SpecsGroups;
