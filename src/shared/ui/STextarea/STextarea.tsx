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
      const cleanText = pastedText.replace(/<[^>]*>/g, '');

      document.execCommand('insertText', false, cleanText);
    }
  };

  return (
    <Flex direction="column" p={5} gap={2} bg="white" borderRadius="2xl">
      <Box
        ref={contentEditableRef}
        contentEditable
        width="full"
        bg="white"
        minH="50px"
        onPaste={handlePaste}
        onInput={handleInput}
        _focus={{ outline: 'none' }}
        _empty={{
          _before: {
            color: 'gray.500',
            content:
              '"Напишите о себе поподробнее. Хороший рассказ убедит обратиться именно к вам"',
          },
        }}
      />
      <Text textAlign="end" color="gray.500">
        {value.length}/{maxLength}
      </Text>
    </Flex>
  );
}
