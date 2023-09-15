import { Center, VStack, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import {
  ApproveCandidatesApplication,
  RejectCandidatesApplication,
} from '~/features/candidat';

import CandidatCard from '~/entities/candidat';

export const CandidatesList = () => {
  const [candidates, setCandidates] = useState([
    {
      id: '1',
      text: 'Заявка не рассмотрена',
      name: 'Вася Пупкин',
    },
    {
      id: '2',
      text: 'Заявка не рассмотрена',
      name: 'Петя Васечкин',
    },
    {
      id: '3',
      text: 'Заявка не рассмотрена',
      name: 'Граф Иван Петрович Мятный',
    },
  ]);

  return (
    <Center>
      <Flex align="center" justify="space-between">
        <VStack spacing={8} w="100%">
          {candidates
            .sort((a, b) => +a.id - +b.id)
            .map((candidat) => (
              <CandidatCard
                reject={
                  <RejectCandidatesApplication
                    candidat={candidat}
                    candidates={candidates}
                    setCandidates={setCandidates}
                  />
                }
                add={
                  <ApproveCandidatesApplication
                    candidat={candidat}
                    candidates={candidates}
                    setCandidates={setCandidates}
                  />
                }
                candidat={candidat}
                key={candidat.id}
              />
            ))}
        </VStack>
      </Flex>
    </Center>
  );
};
