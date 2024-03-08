import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { SpecItem } from './SpecItem';

interface SpecsGroupsProps {
  id: string;
  tempSpec: string[];
  currentSpecs?: {
    id: string;
    name: string | null;
    group_id: string | null;
    created_at: string;
  }[];
  updateCounter: Dispatch<SetStateAction<boolean>>;
  singleChecked?: boolean;
  doubleChecked?: boolean;
}

export const SpecsGroups = ({
  tempSpec,
  currentSpecs,
  updateCounter,
  singleChecked,
  doubleChecked,
}: SpecsGroupsProps) => {
  return currentSpecs?.map((spec) => (
    <SpecItem
      id={spec.id}
      name={spec.name}
      key={spec.id}
      tempSpec={tempSpec}
      updateCounter={updateCounter}
      singleChecked={singleChecked}
      doubleChecked={doubleChecked}
    />
  ));
};

export default SpecsGroups;
