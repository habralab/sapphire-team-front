import { SmallCloseIcon } from '@chakra-ui/icons';
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
  Tag,
  TagLabel,
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

const skillState = [
  { name: 'Figma', id: 1 },
  { name: 'UX', id: 2 },
  { name: 'UI', id: 3 },
  { name: 'Adobe Photoshop', id: 4 },
  { name: 'Дизайн интерфейсов', id: 5 },
  { name: 'Adobe Illustrator', id: 6 },
  { name: 'Web-дизайн', id: 7 },
  { name: 'Прототипирование', id: 8 },
  { name: 'Графический дизайн', id: 9 },
  { name: 'HTML', id: 10 },
  { name: 'CSS', id: 11 },
  { name: 'Sketch', id: 12 },
  { name: 'Tilda', id: 13 },
  { name: 'Adobe after effect', id: 14 },
  { name: 'Новое 1', id: 15 },
  { name: 'Новое 2', id: 16 },
  { name: 'Новое 3', id: 17 },
  { name: 'Новое 4', id: 18 },
  { name: 'Новое 5', id: 19 },
];

export const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [specFilter, setSpecFilter] = useState(false);
  const [skillFilter, setSkillFilter] = useState(false);
  const isMobile = useIsMobile();
  const [userSpecs, setUserSpecs] = useState<number[]>([]);
  const [userSkills, setUserSkills] = useState<number[]>([]);

  const deleteSpecFilter = (id: number) => {
    const newUserSpecs = userSpecs.filter((specId) => specId !== id);
    setUserSpecs(newUserSpecs);
  };

  const deleteSkillFilter = (id: number) => {
    const newUserSkill = userSkills.filter((specId) => specId !== id);
    setUserSkills(newUserSkill);
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
            <Counter count={userSpecs.length + userSkills.length} float borderBg="bg" />
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
              <Button
                onClick={() => {
                  setUserSkills([]);
                  setUserSpecs([]);
                }}
                variant="flat"
                fontSize="sm"
                fontWeight="500"
                colorScheme="purple"
              >
                Сбросить
              </Button>
            </Flex>

            <Stack spacing={6}>
              <Box>
                <Flex gap={1}>
                  <Heading variant="h2" mb={3}>
                    Специализация
                  </Heading>
                  <IconButton
                    onClick={() => {
                      setSpecFilter(true);
                    }}
                    aria-label="add-spec"
                    flexShrink="0"
                    height="6"
                    minW="6"
                    gap={2}
                    icon={
                      <>
                        <Icon as={BsPlus} fontSize="xl" />
                      </>
                    }
                  />
                </Flex>
                <Flex flexWrap="wrap" gap={2}>
                  {specState.map((spec) =>
                    spec.child.map(
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
                    ),
                  )}
                </Flex>
                <FilterSpecialization
                  isVisible={specFilter}
                  changeVisible={setSpecFilter}
                  state={specState}
                  userFilter={userSpecs}
                  resetSpec={() => {
                    setUserSpecs([]);
                  }}
                  saveSpec={setUserSpecs}
                />
              </Box>
              <Box>
                <Flex gap={1}>
                  <Heading variant="h2" mb={3}>
                    Профессиональные навыки
                  </Heading>
                  <IconButton
                    onClick={() => {
                      setSkillFilter(true);
                    }}
                    aria-label="add-skill"
                    flexShrink="0"
                    height="6"
                    minW="6"
                    gap={2}
                    icon={
                      <>
                        <Icon as={BsPlus} fontSize="xl" />
                      </>
                    }
                  />
                </Flex>
                <Flex flexWrap="wrap" gap={2}>
                  {skillState.map(
                    ({ id, name }) =>
                      userSkills.includes(id) && (
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
                              deleteSkillFilter(id);
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
                <FilterSkill
                  state={skillState}
                  isVisible={skillFilter}
                  changeVisible={setSkillFilter}
                  userFilter={userSkills}
                  resetSkill={() => {
                    setUserSkills([]);
                  }}
                  saveSkill={setUserSkills}
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
          <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0" mt="auto">
            <Button fontSize="sm" fontWeight="600" w="full">
              Показать 43 проекта
            </Button>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
