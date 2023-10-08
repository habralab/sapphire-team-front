import { Heading, Text } from '@chakra-ui/react';

interface TextType {
  text: string;
  variant?: string;
}

export function SText(props: TextType) {
  const { text, variant } = props;

  const styles = {
    fontSize: 'xs',
    fontWeight: 'regular',
    fontFamily: `'Inter', sans-serif`,
    color: 'gray.900',
    lineHeight: '120%',
  };

  switch (variant) {
    case 'h1':
      styles.fontSize = '2xl';
      styles.fontWeight = 'bold';
      styles.fontFamily = `'Raleway', sans-serif`;
      break;
    case 'h2':
      styles.fontSize = 'sm';
      styles.fontWeight = 'semibold';
      break;
    case 'name':
      styles.fontSize = 'md';
      styles.fontWeight = 'medium';
      break;
    case 'medium':
      styles.fontWeight = 'medium';
      break;
    case 'light':
      styles.color = 'gray.600';
      break;
    case 'extra small':
      styles.fontSize = '10px';
      styles.color = 'gray.600';
      break;
    default:
      styles;
  }

  return (
    <>
      {variant === 'h1' || variant === 'h2' || variant === 'h3' ? (
        <Heading
          fontSize={styles.fontSize}
          fontFamily={styles.fontFamily}
          fontWeight={styles.fontWeight}
          color={styles.color}
          as={variant}
        >
          {text}
        </Heading>
      ) : (
        <Text
          fontSize={styles.fontSize}
          fontFamily={styles.fontFamily}
          fontWeight={styles.fontWeight}
          color={styles.color}
        >
          {text}
        </Text>
      )}
    </>
  );
}
