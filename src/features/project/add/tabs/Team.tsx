import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import {
  Button,
  Card,
  CloseButton,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import {
  AsyncSelect,
  GroupBase,
  LoadingIndicatorProps,
  OptionBase,
  chakraComponents,
} from 'chakra-react-select';
import React, { Dispatch, SetStateAction, useState } from 'react';

import { STag } from '~/shared/ui/STag';

import { FilterSpecialization } from '../../filter/ui/FilterSpecialization';

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
  { label: 'Figma', value: '1' },
  { label: 'UX', value: '2' },
  { label: 'UI', value: '3' },
  { label: 'Adobe Photoshop', value: '4' },
  { label: 'Дизайн интерфейсов', value: '5' },
  { label: 'Adobe Illustrator', value: '6' },
  { label: 'Web-дизайн', value: '7' },
  { label: 'Прототипирование', value: '8' },
  { label: 'Графический дизайн', value: '9' },
  { label: 'HTML', value: '10' },
  { label: 'CSS', value: '11' },
  { label: 'Sketch', value: '12' },
  { label: 'Tilda', value: '13' },
  { label: 'Adobe after effect', value: '14' },
  { label: 'Новое 1', value: '15' },
  { label: 'Новое 2', value: '16' },
  { label: 'Новое 3', value: '17' },
  { label: 'Новое 4', value: '18' },
  { label: 'Новое 5', value: '19' },
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

const asyncComponents = {
  LoadingIndicator: (
    props: LoadingIndicatorProps<SelectOptions, false, GroupBase<SelectOptions>>,
  ) => {
    return (
      <chakraComponents.LoadingIndicator
        color="blue.500"
        emptyColor="blue.100"
        speed="750ms"
        spinnerSize="md"
        thickness="3px"
        {...props}
      />
    );
  },
};

export const Team = (props: TeamProps) => {
  const { newSpecialist, setNewSpecialist } = props;
  const [specFilter, setSpecFilter] = useState(false);

  const [userSpecs, setUserSpecs] = useState<number[]>([]);

  const [userSkills, setUserSkills] = useState<{ value: string; label: string }[]>([]);

  const deleteSpecFilter = (id: number) => {
    const newUserSpecs = userSpecs.filter((specId) => specId !== id);
    setUserSpecs(newUserSpecs);
  };

  const [unSelectedSkills, setUnSelectedSkills] =
    useState<{ value: string; label: string }[]>(skillState);

  const deleteSkillFilter = (id: string) => {
    const unSelectedSkill = userSkills.find((skill) => skill.value === id);
    if (unSelectedSkill) {
      const newUserSkill = userSkills.filter((skill) => skill.value !== id);
      setUserSkills(newUserSkill);
      setUnSelectedSkills((unSelectedSkills) => [...unSelectedSkills, unSelectedSkill]);
    }
  };

  const getMainTag = (id: number) => {
    let tag = '';
    let title = '';
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
    setUnSelectedSkills(skillState);
  };

  return (
    <>
      <Box mb={5}>
        <Stack gap={1} mb={4}>
          <Heading variant="h2" mb={3}>
            Специализация
          </Heading>
          <InputGroup>
            <Input
              bg="white"
              borderRadius="full"
              fontSize="sm"
              readOnly
              placeholder="Например, Фронтенд разработчик"
              onClick={() => {
                setSpecFilter(true);
              }}
            />
            <InputRightElement>
              <ChevronDownIcon boxSize={6} mr={4} />
            </InputRightElement>
          </InputGroup>
        </Stack>
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
          singleChecked={true}
        />
      </Box>
      <Box mb={5}>
        <Stack gap={1}>
          <Heading variant="h2" mb={3}>
            Профессиональные навыки
          </Heading>
        </Stack>
        <Box mb={3}>
          <AsyncSelect<SelectOptions, false, GroupBase<SelectOptions>>
            placeholder="Например, Python"
            size="md"
            useBasicStyles
            noOptionsMessage={() => 'Ничего не найдено'}
            loadingMessage={() => 'Загрузка...'}
            components={asyncComponents}
            value={null}
            defaultOptions={unSelectedSkills}
            options={unSelectedSkills}
            loadOptions={(inputValue, callback) => {
              setTimeout(() => {
                callback(
                  unSelectedSkills.filter((e) =>
                    e.label.match(new RegExp(inputValue, 'i')),
                  ),
                );
              }, 500);
            }}
            onChange={(e) => {
              if (e) {
                setUserSkills([...userSkills, e]);
                setUnSelectedSkills((unSelectedSkills) =>
                  unSelectedSkills.filter((skill) => skill.value !== e.value),
                );
              }
            }}
            chakraStyles={{
              control: (provided) => ({
                ...provided,
                borderRadius: 'full',
                bg: 'white',
              }),
            }}
          />
        </Box>
        <Flex flexWrap="wrap" gap={2}>
          {userSkills.map(({ label, value }) => (
            <Tag
              key={value}
              size="sm"
              bg="gray.300"
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              <TagLabel>{label}</TagLabel>
              <IconButton
                onClick={() => {
                  deleteSkillFilter(value);
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
          ))}
        </Flex>
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
        Добавить спциалиста
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
