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

export const RejectCandidatesApplication = (props: Props) => {
  const { candidat, setCandidates, candidates } = props;

  const rejectCandidat = () => {
    setCandidates([
      ...candidates.filter((elem) => elem.id !== candidat.id),
      { ...candidat, text: 'Заявка отклонена' },
    ]);
  };

  return (
    <Button
      colorScheme="red"
      size="md"
      height="48px"
      width="200px"
      isDisabled={candidat.text === 'Заявка отклонена' && true}
      onClick={rejectCandidat}
    >
      Отклонить
    </Button>
  );
};
