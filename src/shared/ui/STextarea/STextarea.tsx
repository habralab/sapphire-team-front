import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';

interface STextareaProps {
  maxLength: number;
}

export function STextarea({ maxLength }: STextareaProps) {
  const [value, setValue] = useState('');
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);
      const offset = range?.startOffset;

      const content = contentEditableRef.current.textContent ?? '';
      if (content.length > maxLength) {
        if (selection) {
          const newValue = content.slice(0, maxLength);

          contentEditableRef.current.textContent = newValue;
          setCursorPosition(
            offset && offset > maxLength ? maxLength : offset ? offset : newValue.length,
          );

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
      const selection = window.getSelection();

      if (!selection) return;

      const range = selection.getRangeAt(0);
      range.deleteContents();

      contentEditableRef.current.focus();

      if (range.startContainer.nodeType === Node.TEXT_NODE) {
        const startOffset = range.startOffset + pastedText.length;
        range.startContainer.textContent =
          range.startContainer.textContent?.slice(0, range.startOffset) +
          pastedText +
          range.startContainer.textContent?.slice(range.startOffset);
        range.setStart(range.startContainer, startOffset);
        range.collapse(true);
      } else {
        const textNode = document.createTextNode(pastedText);
        contentEditableRef.current.appendChild(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);
      }

      selection.removeAllRanges();
      selection.addRange(range);

      const inputEvent = new Event('input', { bubbles: true });
      contentEditableRef.current.dispatchEvent(inputEvent);
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
        onClick={() => {
          contentEditableRef.current?.focus();
          setCursorPosition(value.length);
        }}
      >
        {value.length}/{maxLength}
      </Text>
    </Box>
  );
}
