import { IconButton, Icon } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function GoBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <IconButton
      aria-label="back"
      icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
      variant="flat"
      onClick={goBack}
      minW={6}
      h={6}
    />
  );
}
