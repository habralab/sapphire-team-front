import {
  Button,
  IconButton,
  Modal,
  Text,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Icon,
  CloseButton,
  Heading,
  Flex,
  Box,
  Container,
  Stack,
  Input,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';

import { FilterSkill } from './FilterSkill';
import { FilterSpecialization } from './FilterSpecialization';

const specState = [
  {
    id: 1,
    title: 'Разработка',
    child: [
      { name: 'Figma', id: 1, titleId: 1 },
      { name: 'UX', id: 2, titleId: 1 },
      { name: 'UI', id: 3, titleId: 1 },
      { name: 'Adobe Photoshop', id: 4, titleId: 1 },
      { name: 'Дизайн интерфейсов', id: 5, titleId: 1 },
      { name: 'Adobe Illustrator', id: 6, titleId: 1 },
    ],
  },
  {
    id: 2,
    title: 'Тестирование',
    child: [
      { name: 'Tilda', id: 7, titleId: 2 },
      { name: 'Adobe after effect', id: 8, titleId: 2 },
      { name: 'Новое 1', id: 9, titleId: 2 },
      { name: 'Новое 2', id: 10, titleId: 2 },
      { name: 'Новое 3', id: 11, titleId: 2 },
      { name: 'Новое 4', id: 12, titleId: 2 },
      { name: 'Новое 5', id: 13, titleId: 2 },
    ],
  },
  {
    id: 3,
    title: 'Аналитика',
    child: [
      { name: 'Figma', id: 14, titleId: 3 },
      { name: 'UX', id: 15, titleId: 3 },
      { name: 'UI', id: 16, titleId: 3 },
      { name: 'Adobe Photoshop', id: 17, titleId: 3 },
      { name: 'Дизайн интерфейсов', id: 18, titleId: 3 },
      { name: 'Adobe Illustrator', id: 19, titleId: 3 },
    ],
  },
  {
    id: 4,
    title: 'Дизайн',
    child: [
      { name: 'Figma', id: 20, titleId: 4 },
      { name: 'UX', id: 21, titleId: 4 },
      { name: 'UI', id: 22, titleId: 4 },
      { name: 'Adobe Photoshop', id: 23, titleId: 4 },
      { name: 'Дизайн интерфейсов', id: 24, titleId: 4 },
      { name: 'Adobe Illustrator', id: 25, titleId: 4 },
    ],
  },
  {
    id: 5,
    title: 'Менеджмент',
    child: [
      { name: 'Figma', id: 26, titleId: 5 },
      { name: 'UX', id: 27, titleId: 5 },
      { name: 'UI', id: 28, titleId: 5 },
      { name: 'Adobe Photoshop', id: 29, titleId: 5 },
      { name: 'Дизайн интерфейсов', id: 30, titleId: 5 },
      { name: 'Adobe Illustrator', id: 31, titleId: 5 },
    ],
  },
  {
    id: 6,
    title: 'Информационнная безопасность',
    child: [
      { name: 'Figma', id: 32, titleId: 6 },
      { name: 'UX', id: 33, titleId: 6 },
      { name: 'UI', id: 34, titleId: 6 },
      { name: 'Adobe Photoshop', id: 35, titleId: 6 },
      { name: 'Дизайн интерфейсов', id: 36, titleId: 6 },
      { name: 'Adobe Illustrator', id: 37, titleId: 6 },
    ],
  },
  {
    id: 7,
    title: 'Искусственный интеллект',
    child: [
      { name: 'Figma', id: 38, titleId: 7 },
      { name: 'UX', id: 39, titleId: 7 },
      { name: 'UI', id: 40, titleId: 7 },
      { name: 'Adobe Photoshop', id: 41, titleId: 7 },
      { name: 'Дизайн интерфейсов', id: 42, titleId: 7 },
      { name: 'Adobe Illustrator', id: 43, titleId: 7 },
    ],
  },
  {
    id: 8,
    title: 'Поддержка',
    child: [
      { name: 'Figma', id: 44, titleId: 8 },
      { name: 'UX', id: 45, titleId: 8 },
      { name: 'UI', id: 46, titleId: 8 },
      { name: 'Adobe Photoshop', id: 47, titleId: 8 },
      { name: 'Дизайн интерфейсов', id: 48, titleId: 8 },
      { name: 'Adobe Illustrator', id: 49, titleId: 8 },
    ],
  },
  {
    id: 9,
    title: 'Маркетинг',
    child: [
      { name: 'Figma', id: 50, titleId: 9 },
      { name: 'UX', id: 51, titleId: 9 },
      { name: 'UI', id: 52, titleId: 9 },
      { name: 'Adobe Photoshop', id: 53, titleId: 9 },
      { name: 'Дизайн интерфейсов', id: 54, titleId: 9 },
      { name: 'Adobe Illustrator', id: 55, titleId: 9 },
    ],
  },
  {
    id: 10,
    title: 'Администрирование',
    child: [
      { name: 'Figma', id: 56, titleId: 10 },
      { name: 'UX', id: 57, titleId: 10 },
      { name: 'UI', id: 58, titleId: 10 },
      { name: 'Adobe Photoshop', id: 59, titleId: 10 },
      { name: 'Дизайн интерфейсов', id: 60, titleId: 10 },
      { name: 'Adobe Illustrator', id: 61, titleId: 10 },
    ],
  },
  {
    id: 11,
    title: 'Контент',
    child: [
      { name: 'Figma', id: 62, titleId: 11 },
      { name: 'UX', id: 63, titleId: 11 },
      { name: 'UI', id: 64, titleId: 11 },
      { name: 'Adobe Photoshop', id: 65, titleId: 11 },
      { name: 'Дизайн интерфейсов', id: 66, titleId: 11 },
      { name: 'Adobe Illustrator', id: 67, titleId: 11 },
    ],
  },
  {
    id: 12,
    title: 'HR',
    child: [
      { name: 'Figma', id: 68, titleId: 12 },
      { name: 'UX', id: 69, titleId: 12 },
      { name: 'UI', id: 70, titleId: 12 },
      { name: 'Adobe Photoshop', id: 71, titleId: 12 },
      { name: 'Дизайн интерфейсов', id: 72, titleId: 12 },
      { name: 'Adobe Illustrator', id: 73, titleId: 12 },
    ],
  },
  {
    id: 13,
    title: 'Офис',
    child: [
      { name: 'Figma', id: 74, titleId: 13 },
      { name: 'UX', id: 75, titleId: 13 },
      { name: 'UI', id: 76, titleId: 13 },
      { name: 'Adobe Photoshop', id: 77, titleId: 13 },
      { name: 'Дизайн интерфейсов', id: 78, titleId: 13 },
      { name: 'Adobe Illustrator', id: 79, titleId: 13 },
    ],
  },
  {
    id: 14,
    title: 'Зерокодинг',
    child: [
      { name: 'Figma', id: 80, titleId: 14 },
      { name: 'UX', id: 81, titleId: 14 },
      { name: 'UI', id: 82, titleId: 14 },
      { name: 'Adobe Photoshop', id: 83, titleId: 14 },
      { name: 'Дизайн интерфейсов', id: 84, titleId: 14 },
      { name: 'Adobe Illustrator', id: 85, titleId: 14 },
    ],
  },
  {
    id: 15,
    title: 'Тестовая категория',
    child: [
      { name: 'Figma', id: 86, titleId: 15 },
      { name: 'UX', id: 87, titleId: 15 },
      { name: 'UI', id: 88, titleId: 15 },
      { name: 'Adobe Photoshop', id: 89, titleId: 15 },
      { name: 'Дизайн интерфейсов', id: 90, titleId: 15 },
      { name: 'Adobe Illustrator', id: 91, titleId: 15 },
    ],
  },
  {
    id: 16,
    title: 'Тестовая категория 2',
    child: [
      { name: 'Figma', id: 92, titleId: 16 },
      { name: 'UX', id: 93, titleId: 16 },
      { name: 'UI', id: 94, titleId: 16 },
      { name: 'Adobe Photoshop', id: 95, titleId: 16 },
      { name: 'Дизайн интерфейсов', id: 96, titleId: 16 },
      { name: 'Adobe Illustrator', id: 97, titleId: 16 },
      { name: 'Adobe Illustrator', id: 98, titleId: 16 },
      { name: 'Adobe Illustrator', id: 99, titleId: 16 },
      { name: 'Adobe Illustrator', id: 100, titleId: 16 },
    ],
  },
];

const skillState = [
  { name: 'Figma', state: false },
  { name: 'UX', state: false },
  { name: 'UI', state: false },
  { name: 'Adobe Photoshop', state: false },
  { name: 'Дизайн интерфейсов', state: false },
  { name: 'Adobe Illustrator', state: false },
  { name: 'Web-дизайн', state: false },
  { name: 'Прототипирование', state: false },
  { name: 'Графический дизайн', state: false },
  { name: 'HTML', state: false },
  { name: 'CSS', state: false },
  { name: 'Sketch', state: false },
  { name: 'Tilda', state: false },
  { name: 'Adobe after effect', state: false },
  { name: 'Новое 1', state: false },
  { name: 'Новое 2', state: false },
  { name: 'Новое 3', state: false },
  { name: 'Новое 4', state: false },
  { name: 'Новое 5', state: false },
];

export const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [specFilter, setSpecFilter] = useState(false);
  const [skillFilter, setSkillFilter] = useState(false);
  const isMobile = useIsMobile();
  const [userSpecs, setUserSpecs] = useState<number[]>([]);
  const [skillData, setSkillData] = useState([...skillState]);

  const saveUserFilter = (filter: number[]) => {
    setUserSpecs(filter);
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="filter"
        flexShrink="0"
        gap={2}
        padding={['0', '0', '4']}
        fontWeight="normal"
        icon={
          <>
            <Text hidden={isMobile}>Все фильтры</Text>
            <Icon as={IoOptions} fontSize="2xl" />
            <Counter count={4} float borderBg="bg" />
          </>
        }
      ></IconButton>

      <Modal onClose={onClose} size="full" isOpen={isOpen} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent bg="bg" display="flex" alignItems="center">
          <Container maxW="md">
            <Flex alignItems="center" justifyContent="space-between" my={4}>
              <Flex alignItems="baseline">
                <CloseButton onClick={onClose} mr={2} />
                <Heading variant="h2" mb={0}>
                  Фильтры
                </Heading>
              </Flex>
              <Button variant="flat" fontSize="sm" fontWeight="500" colorScheme="purple">
                Сбросить
              </Button>
            </Flex>

            <Stack spacing={6}>
              <Box>
                <Heading variant="h2" mb={3}>
                  Специализация
                </Heading>
                <IconButton
                  onClick={() => {
                    setSpecFilter(true);
                  }}
                  aria-label="filter"
                  flexShrink="0"
                  gap={2}
                  padding={['0', '0', '4']}
                  fontWeight="normal"
                  icon={
                    <>
                      <Icon as={BsPlus} fontSize="2xl" />
                    </>
                  }
                />
                <FilterSpecialization
                  isVisible={specFilter}
                  changeVisible={setSpecFilter}
                  state={specState}
                  userFilter={userSpecs}
                  resetSpec={() => {
                    setUserSpecs([]);
                  }}
                  saveSpec={saveUserFilter}
                />
              </Box>
              <Box>
                <Heading variant="h2" mb={3}>
                  Профессиональные навыки
                </Heading>
                <IconButton
                  onClick={() => {
                    setSkillFilter(true);
                  }}
                  aria-label="filter"
                  flexShrink="0"
                  gap={2}
                  padding={['0', '0', '4']}
                  fontWeight="normal"
                  icon={
                    <>
                      <Icon as={BsPlus} fontSize="2xl" />
                    </>
                  }
                />
                <FilterSkill
                  isVisible={skillFilter}
                  changeVisible={setSkillFilter}
                  state={skillData}
                  resetSpec={() => {
                    setSkillData([...skillState]);
                  }}
                  saveSpec={setSkillData}
                />
              </Box>
              <Box>
                <Heading variant="h2">Дата начала проекта</Heading>
                <Input
                  variant="filled"
                  bg="white"
                  borderRadius="full"
                  fontSize="sm"
                  color="gray.500"
                  placeholder="Выберите дату"
                  type="date"
                />
              </Box>
            </Stack>
          </Container>
          <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
            <Button fontSize="sm" fontWeight="600" w="full">
              Показать 43 проекта
            </Button>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
