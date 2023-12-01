import {
  Tag,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

interface TagType {
  mainTags?: string[];
  tags?: string[];
  accordion?: boolean;
}

export function STag(props: TagType) {
  const { tags, mainTags, accordion } = props;

  return !accordion ? (
    <Flex
      direction={mainTags && !tags ? 'column' : 'row'}
      align={mainTags && 'start'}
      wrap="wrap"
      gap={2}
    >
      {mainTags?.map((tag) => (
        <Tag key={tag} bg="gray.900" py={1} px={2} borderRadius="lg">
          <Text color="white" as="h3">
            {tag}
          </Text>
        </Tag>
      ))}
      {tags?.map((tag) => (
        <Tag key={tag} bg={'gray.300'} py={1} px={2} borderRadius="lg">
          {tag}
        </Tag>
      ))}
    </Flex>
  ) : (
    <Accordion allowToggle>
      <AccordionItem display="flex" flexWrap="wrap" gap={2}>
        {mainTags?.length && (
          <AccordionButton p={0} w="auto" _hover={{ bg: 'inherit' }}>
            <Tag bg="gray.900" py={1} px={2} borderRadius="lg">
              <Text color="white" as="h3">
                {mainTags[0]}
              </Text>
              <AccordionIcon color="white" />
            </Tag>
          </AccordionButton>
        )}
        <AccordionPanel display="flex" gap={1} flexWrap="wrap">
          {tags?.map((tag) => (
            <Tag key={tag} bg={'gray.300'} py={1} px={2} borderRadius="lg">
              {tag}
            </Tag>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
