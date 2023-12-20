import { Flex, Heading, IconButton, Icon, Switch, Text, type As } from '@chakra-ui/react';

interface SettingItemProp {
  type?: 'heading' | 'text';
  children: string;
  icon?: As;
  variant?: string;
}

export function SettingItem(props: SettingItemProp) {
  const { type, children, icon, variant } = props;
  return (
    <Flex alignItems="center" justifyContent="space-between" py={3}>
      {type === 'heading' ? (
        <Heading variant={variant} mb={0}>
          {children}
        </Heading>
      ) : (
        <Text>{children}</Text>
      )}

      {icon ? (
        <IconButton
          aria-label="update-profile"
          icon={<Icon as={icon} fontSize="2xl" />}
          variant="flat"
          minW={6}
          h={6}
        />
      ) : (
        <Switch size="md" />
      )}
    </Flex>
  );
}
