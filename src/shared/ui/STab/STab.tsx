import { Tab } from '@chakra-ui/react';

interface TabType {
  children: string;
}

export function STab(props: TabType) {
  const { children } = props;

  return (
    <Tab
    // h="28px"
    // color="gray.600"
    // fontSize="sm"
    // fontWeight="normal"
    // flex="1"
    // _selected={{ color: 'white', bg: 'gray.900' }}
    >
      {children}
    </Tab>
  );
}
