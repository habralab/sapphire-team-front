import { Icon, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

export const AddProject = () => {
  return (
    <IconButton
      variant="flat"
      aria-label="add-project"
      icon={
        <>
          <Icon as={BsPlusCircleFill} />
        </>
      }
    />
  );
};
