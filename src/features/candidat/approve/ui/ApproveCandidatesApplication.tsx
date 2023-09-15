import { Button } from '@chakra-ui/react';

interface CandidatType {
  id: string;
  text: string;
  name: string;
}

interface Props {
  candidat: CandidatType;
  setCandidates: (candidates: CandidatType[]) => void;
  candidates: CandidatType[];
}

export const ApproveCandidatesApplication = (props: Props) => {
  const { candidat, setCandidates, candidates } = props;

  const approveCandidat = () => {
    setCandidates([
      ...candidates.filter((elem) => elem.id !== candidat.id),
      { ...candidat, text: 'Заявка одобрена' },
    ]);
  };

  return (
    <Button
      colorScheme="green"
      size="md"
      height="48px"
      width="200px"
      isDisabled={candidat.text === 'Заявка одобрена'}
      onClick={approveCandidat}
    >
      Одобрить
    </Button>
  );
};
