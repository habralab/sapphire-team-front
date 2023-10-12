import { Heading, Text, TextProps } from '@chakra-ui/react';

type Heading = 'h1' | 'h2' | 'h3';
type Variants = 'h1' | 'h2' | 'h3' | 'caption' | 'main';

type STextProps = {
  children: string;
  variant?: Variants;
  as?: Heading;
} & TextProps;

function getStyles(variant?: Variants) {
  const styles: TextProps = {};

  switch (variant) {
    case 'h1':
      styles.fontSize = '2xl';
      styles.fontWeight = 'bold';
      styles.fontFamily = `'Raleway', sans-serif`;
      break;
    case 'h2':
      styles.fontSize = 'lg';
      styles.fontWeight = 'medium';
      styles.marginBottom = '3';
      break;
    case 'h3':
      styles.fontSize = 'sm';
      styles.fontWeight = 'medium';
      styles.marginBottom = '2';
      break;
    case 'caption':
      styles.fontSize = 'xs';
      styles.color = 'gray.700';
      styles.marginBottom = '3';
      break;
    case 'main':
      styles.marginBottom = '3';
      break;
  }
  return styles;
}

export function SText(props: STextProps) {
  const { children, variant, as, ...others } = props;

  return (
    <>
      {variant?.startsWith('h') ? (
        <Heading {...getStyles(variant)} as={as ?? (variant as Heading)} {...others}>
          {children}
        </Heading>
      ) : (
        <Text {...getStyles(variant)} {...others}>
          {children}
        </Text>
      )}
    </>
  );
}
