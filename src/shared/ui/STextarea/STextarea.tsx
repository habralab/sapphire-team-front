import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useRef, useState, useEffect, useCallback } from 'react';

interface STextareaProps {
  maxLength: number;
}

export function STextarea({ maxLength }: STextareaProps) {
  const [value, setValue] = useState('');
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentEditableRef.current && cursorPosition !== null) {
      const selection = window.getSelection();
      if (selection && contentEditableRef.current.firstChild) {
        const range = document.createRange();
        range.setStart(contentEditableRef.current.firstChild, cursorPosition);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        setCursorPosition(null);
      }
    }
  }, [cursorPosition]);

  const handleInput = useCallback(() => {
    if (contentEditableRef.current) {
      const content = contentEditableRef.current.textContent ?? '';
      console.log(content);
      if (content.length > maxLength) {
        const selection = window.getSelection();

        if (selection) {
          const newValue = content.slice(0, maxLength);

          const range = selection.getRangeAt(0);

          setCursorPosition(
            range.startOffset > maxLength ? maxLength : range.startOffset,
          );
          contentEditableRef.current.textContent = newValue;

          setValue(newValue);
        }
      } else {
        setValue(content);
      }
    }
  }, []);

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (contentEditableRef.current) {
      const clipboardData = e.clipboardData;
      const pastedText = clipboardData.getData('text/plain');
      document.execCommand('insertText', false, pastedText);
    }
  };

  return (
    <Box pos="relative">
      <Box
        p={5}
        pb={7}
        borderRadius="2xl"
        ref={contentEditableRef}
        contentEditable
        width="full"
        bg="white"
        minH="50px"
        onPaste={handlePaste}
        onInput={handleInput}
        _empty={{
          _before: {
            cursor: 'text',
            color: 'gray.500',
            content:
              '"Напишите о себе поподробнее. Хороший рассказ убедит обратиться именно к вам"',
          },
        }}
      />
      <Text
        pos="absolute"
        right={2}
        bottom={2}
        color="gray.500"
        onClick={() => contentEditableRef.current?.focus()}
      >
        {value.length}/{maxLength}
      </Text>
    </Box>
  );
}
