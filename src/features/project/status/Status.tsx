import { Badge, TextProps } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

type BadgeProps = {
  children: string;
} & TextProps;

export const Status = (props: BadgeProps) => {
  const { children, ...others } = props;
  return (
    <Badge
      colorScheme={children === 'Проект завершён' ? 'grayBage' : 'purpleBage'}
      variant="solid"
      textTransform="none"
      width="fit-content"
      px={2.5}
      py={1}
      borderRadius="1.25rem"
      {...others}
    >
      <SText variant="caption" color="white" fontWeight="medium">
        {children}
      </SText>
    </Badge>
  );
};
