import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import { Button, Card, CloseButton } from '@chakra-ui/react';
import { OptionBase } from 'chakra-react-select';
import { Dispatch, SetStateAction, useState } from 'react';

import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';
import { STag } from '~/shared/ui/STag';

const specState = [
  {
    id: 1,
    title: 'Разработка',
    child: [
      { name: 'Figma', id: 1 },
      { name: 'UX', id: 2 },
      { name: 'UI', id: 3 },
      { name: 'Adobe Photoshop', id: 4 },
      { name: 'Дизайн интерфейсов', id: 5 },
      { name: 'Adobe Illustrator', id: 6 },
    ],
  },
  {
    id: 2,
    title: 'Тестирование',
    child: [
      { name: 'Tilda', id: 7 },
      { name: 'Adobe after effect', id: 8 },
      { name: 'Новое 1', id: 9 },
      { name: 'Новое 2', id: 10 },
      { name: 'Новое 3', id: 11 },
      { name: 'Новое 4', id: 12 },
      { name: 'Новое 5', id: 13 },
    ],
  },
  {
    id: 3,
    title: 'Аналитика',
    child: [
      { name: 'Figma', id: 14 },
      { name: 'UX', id: 15 },
      { name: 'UI', id: 16 },
      { name: 'Adobe Photoshop', id: 17 },
      { name: 'Дизайн интерфейсов', id: 18 },
      { name: 'Adobe Illustrator', id: 19 },
    ],
  },
  {
    id: 4,
    title: 'Дизайн',
    child: [
      { name: 'Figma', id: 20 },
      { name: 'UX', id: 21 },
      { name: 'UI', id: 22 },
      { name: 'Adobe Photoshop', id: 23 },
      { name: 'Дизайн интерфейсов', id: 24 },
      { name: 'Adobe Illustrator', id: 25 },
    ],
  },
  {
    id: 5,
    title: 'Менеджмент',
    child: [
      { name: 'Figma', id: 26 },
      { name: 'UX', id: 27 },
      { name: 'UI', id: 28 },
      { name: 'Adobe Photoshop', id: 29 },
      { name: 'Дизайн интерфейсов', id: 30 },
      { name: 'Adobe Illustrator', id: 31 },
    ],
  },
  {
    id: 6,
    title: 'Информационнная безопасность',
    child: [
      { name: 'Figma', id: 32 },
      { name: 'UX', id: 33 },
      { name: 'UI', id: 34 },
      { name: 'Adobe Photoshop', id: 35 },
      { name: 'Дизайн интерфейсов', id: 36 },
      { name: 'Adobe Illustrator', id: 37 },
    ],
  },
  {
    id: 7,
    title: 'Искусственный интеллект',
    child: [
      { name: 'Figma', id: 38 },
      { name: 'UX', id: 39 },
      { name: 'UI', id: 40 },
      { name: 'Adobe Photoshop', id: 41 },
      { name: 'Дизайн интерфейсов', id: 42 },
      { name: 'Adobe Illustrator', id: 43 },
    ],
  },
  {
    id: 8,
    title: 'Поддержка',
    child: [
      { name: 'Figma', id: 44 },
      { name: 'UX', id: 45 },
      { name: 'UI', id: 46 },
      { name: 'Adobe Photoshop', id: 47 },
      { name: 'Дизайн интерфейсов', id: 48 },
      { name: 'Adobe Illustrator', id: 49 },
    ],
  },
  {
    id: 9,
    title: 'Маркетинг',
    child: [
      { name: 'Figma', id: 50 },
      { name: 'UX', id: 51 },
      { name: 'UI', id: 52 },
      { name: 'Adobe Photoshop', id: 53 },
      { name: 'Дизайн интерфейсов', id: 54 },
      { name: 'Adobe Illustrator', id: 55 },
    ],
  },
  {
    id: 10,
    title: 'Администрирование',
    child: [
      { name: 'Figma', id: 56 },
      { name: 'UX', id: 57 },
      { name: 'UI', id: 58 },
      { name: 'Adobe Photoshop', id: 59 },
      { name: 'Дизайн интерфейсов', id: 60 },
      { name: 'Adobe Illustrator', id: 61 },
    ],
  },
  {
    id: 11,
    title: 'Контент',
    child: [
      { name: 'Figma', id: 62 },
      { name: 'UX', id: 63 },
      { name: 'UI', id: 64 },
      { name: 'Adobe Photoshop', id: 65 },
      { name: 'Дизайн интерфейсов', id: 66 },
      { name: 'Adobe Illustrator', id: 67 },
    ],
  },
  {
    id: 12,
    title: 'HR',
    child: [
      { name: 'Figma', id: 68 },
      { name: 'UX', id: 69 },
      { name: 'UI', id: 70 },
      { name: 'Adobe Photoshop', id: 71 },
      { name: 'Дизайн интерфейсов', id: 72 },
      { name: 'Adobe Illustrator', id: 73 },
    ],
  },
  {
    id: 13,
    title: 'Офис',
    child: [
      { name: 'Figma', id: 74 },
      { name: 'UX', id: 75 },
      { name: 'UI', id: 76 },
      { name: 'Adobe Photoshop', id: 77 },
      { name: 'Дизайн интерфейсов', id: 78 },
      { name: 'Adobe Illustrator', id: 79 },
    ],
  },
  {
    id: 14,
    title: 'Зерокодинг',
    child: [
      { name: 'Figma', id: 80 },
      { name: 'UX', id: 81 },
      { name: 'UI', id: 82 },
      { name: 'Adobe Photoshop', id: 83 },
      { name: 'Дизайн интерфейсов', id: 84 },
      { name: 'Adobe Illustrator', id: 85 },
    ],
  },
  {
    id: 15,
    title: 'Тестовая категория',
    child: [
      { name: 'Figma', id: 86 },
      { name: 'UX', id: 87 },
      { name: 'UI', id: 88 },
      { name: 'Adobe Photoshop', id: 89 },
      { name: 'Дизайн интерфейсов', id: 90 },
      { name: 'Adobe Illustrator', id: 91 },
    ],
  },
  {
    id: 16,
    title: 'Тестовая категория 2',
    child: [
      { name: 'Figma', id: 92 },
      { name: 'UX', id: 93 },
      { name: 'UI', id: 94 },
      { name: 'Adobe Photoshop', id: 95 },
      { name: 'Дизайн интерфейсов', id: 96 },
      { name: 'Adobe Illustrator', id: 97 },
      { name: 'Adobe Illustrator', id: 98 },
      { name: 'Adobe Illustrator', id: 99 },
      { name: 'Adobe Illustrator', id: 100 },
    ],
  },
];

interface SelectOptions extends OptionBase {
  label: string;
  value: string;
}

export interface NewSpecialist {
  spec: number[];
  skills: SelectOptions[];
  id: number;
}

interface TeamProps {
  newSpecialist: NewSpecialist[];
  setNewSpecialist: Dispatch<SetStateAction<NewSpecialist[]>>;
}

export const Team = (props: TeamProps) => {
  const { newSpecialist, setNewSpecialist } = props;
  const [userSpecs, setUserSpecs] = useState<number[]>([]);
  const [userSkills, setUserSkills] = useState<{ value: string; label: string }[]>([]);

  const [refresh, setRefresh] = useState(false);

  const getMainTag = (id: number) => {
    let title = '';
    let tag = '';
    specState.forEach((spec) => {
      spec.child.forEach((ch) => {
        if (ch.id === id) {
          tag = ch.name;
          title = spec.title;
          return;
        }
      });
    });

    return [tag, title];
  };

  const handleNewSpecialist = () => {
    setNewSpecialist([
      ...newSpecialist,
      { spec: [...userSpecs], skills: [...userSkills], id: Date.now() },
    ]);
    setUserSpecs([]);
    setUserSkills([]);
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <Box mb={5}>
        <Stack gap={1} mb={4}>
          <Heading variant="h2" mb={3}>
            Специализация
          </Heading>
          <FilterSpecialization
            singleChecked={true}
            sendUserSpec={setUserSpecs}
            refresh={refresh}
          />
        </Stack>
      </Box>
      <Box mb={5}>
        <Stack gap={1}>
          <Heading variant="h2" mb={3}>
            Профессиональные навыки
          </Heading>
        </Stack>
        <Box mb={3}>
          <SearchSelect sendUserSkills={setUserSkills} refresh={refresh} />
        </Box>
      </Box>
      <Button
        mb={5}
        isDisabled={userSpecs.length === 0 || userSkills.length === 0}
        type="button"
        onClick={handleNewSpecialist}
        fontSize="sm"
        fontWeight="600"
        w="full"
      >
        Добавить специалиста
      </Button>
      <Stack gap={6}>
        {newSpecialist.map((specialist) => {
          const [mainTag, mainTitle] = getMainTag(specialist.spec[0]);
          return (
            <Card key={specialist.id} p={5} borderRadius="2xl" boxShadow="none">
              <Flex alignItems="baseline" justifyContent="space-between">
                <Heading variant="h2" mb={4}>
                  {mainTitle}
                </Heading>
                <CloseButton
                  onClick={() => {
                    setNewSpecialist(
                      newSpecialist.filter(({ id }) => id !== specialist.id),
                    );
                  }}
                />
              </Flex>
              <STag
                mainTags={[mainTag]}
                tags={specialist.skills.map(({ label }) => label)}
              />
            </Card>
          );
        })}
      </Stack>
    </>
  );
};
