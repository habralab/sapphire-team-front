import { Tab, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

interface Tab {
  id: number | string;
  label: string;
}
interface AnimatedTabsProps {
  tabs: Tab[];
  currentIndex: number | string;
}

const ChakraAnimateTabs = chakra(motion.span, {
  baseStyle: {
    borderRadius: 'full',
    pos: 'absolute',
    inset: '0',
    zIndex: 'docked',
    backgroundColor: 'dark.500',
    mixBlendMode: 'difference',
  },
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const AnimatedTabs = ({ tabs, currentIndex }: AnimatedTabsProps) => {
  return tabs.map(({ id, label }) => (
    <Tab key={id} position="relative">
      {currentIndex === id && (
        <ChakraAnimateTabs
          layoutId="bubble"
          transition={{ type: 'spring', bounce: '0.2', duration: '0.6' }}
        />
      )}
      {label}
    </Tab>
  ));
};
