import { Heading, Text } from '@chakra-ui/react';

type Heading = 'h1' | 'h2' | 'h3';

interface TextType {
  children: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'date' | 'small' | 'info' | 'white' | 'caption';
  as?: Heading;
}

export function SText(props: TextType) {
  const { children, variant, as } = props;

  const styles = {
    fontSize: 'sm',
    fontWeight: 'normal',
    fontFamily: `'Inter', sans-serif`,
    color: 'gray.900',
  };

  switch (variant) {
    case 'h1':
      styles.fontSize = '2xl';
      styles.fontWeight = 'bold';
      styles.fontFamily = `'Raleway', sans-serif`;
      break;
    case 'h2':
      styles.fontSize = 'md';
      styles.fontWeight = 'medium';
      break;
    case 'h3':
      styles.fontWeight = 'medium';
      break;
    case 'h4':
      styles.fontSize = 'xs';
      styles.fontWeight = 'medium';
      break;
    case 'white':
      styles.color = 'white';
      break;
    case 'small':
    case 'date':
      styles.fontSize = 'xs';
      styles.color = 'gray.600';
      break;
    case 'info':
      styles.fontSize = 'xs';
      break;
    case 'caption':
      styles.fontSize = '10px';
      styles.color = 'gray.600';
      break;
    default:
      styles;
  }

  return (
    <>
      {variant?.startsWith('h') ? (
        <Heading
          fontSize={styles.fontSize}
          fontFamily={styles.fontFamily}
          fontWeight={styles.fontWeight}
          color={styles.color}
          as={as ?? (variant as Heading)}
        >
          {children}
        </Heading>
      ) : (
        <Text
          fontSize={styles.fontSize}
          fontFamily={styles.fontFamily}
          fontWeight={styles.fontWeight}
          color={styles.color}
        >
          {children}
        </Text>
      )}
    </>
  );
}
