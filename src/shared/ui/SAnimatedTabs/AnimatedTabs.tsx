import { Tab } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Tab {
  id: number | string;
  label: string;
}
interface AnimatedTabsProps {
  tabs: Tab[];
  currentIndex: number | string;
}

export const AnimatedTabs = ({ tabs, currentIndex }: AnimatedTabsProps) => {
  return tabs.map(({ id, label }) => (
    <Tab key={id} position="relative">
      {currentIndex === id && (
        <motion.span
          layoutId="bubble"
          style={{
            borderRadius: 9999,
            position: 'absolute',
            inset: '0px',
            zIndex: 10,
            backgroundColor: 'black',
            mixBlendMode: 'difference',
          }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      {label}
    </Tab>
  ));
};
