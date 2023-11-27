import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from 'react';

interface STextareaProps {
  maxLength: number;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  isInvalid?: boolean;
}

export function STextarea({
  maxLength,
  value = '',
  setValue,
  placeholder,
  isInvalid,
}: STextareaProps) {
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState(0);
  const [updated, setUpdated] = useState(0);
  const [offset, setOffset] = useState<number | null>(null);

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
    const selection = window.getSelection();
    if (contentEditableRef.current && selection) {
      const range = selection.getRangeAt(0);
      const offset = range.startOffset;

      if (!offset) setOffset(0);
      else setOffset(offset > maxLength ? maxLength : offset);

      const content = contentEditableRef.current.textContent ?? '';

      const newValue = content.slice(0, maxLength);
      contentEditableRef.current.textContent = newValue;
      setValue(newValue);
      setUpdated((oldUpdated) => ++oldUpdated);
    }
  }, []);

  useLayoutEffect(() => {
    setCursorPosition(offset);
  }, [offset, updated]);

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

  useLayoutEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.textContent = placeholder;
      const height = contentEditableRef.current.getBoundingClientRect().height;
      setMinH(height);
      contentEditableRef.current.textContent = '';
    }
  }, []);

  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.textContent = value;
    }
  }, [value]);

  return (
    <Box pos="relative" w="full">
      <Box
        fontSize="md"
        p={5}
        pb={7}
        borderRadius="2xl"
        ref={contentEditableRef}
        aria-invalid={isInvalid}
        contentEditable
        width="full"
        bg="white"
        border="1px"
        borderColor="inherit"
        minH={minH}
        onPaste={handlePaste}
        pos="relative"
        onInput={handleInput}
        outline="2px solid transparent"
        outlineColor={isInvalid ? 'red.500' : 'transparent'}
        _focus={{
          outlineColor: 'blue.500',
        }}
        _empty={{
          _before: {
            cursor: 'text',
            color: 'gray.500',
            content: `"${placeholder}"`,
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
