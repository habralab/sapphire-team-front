import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';

interface STextareaProps {
  maxLength: number;
  information: string;
  setInformation: (information: string) => void;
  placeholder: string;
}

export function STextarea({
  maxLength,
  information,
  setInformation,
  placeholder,
}: STextareaProps) {
  // const [value, setValue] = useState('');
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState(0);

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

          setInformation(newValue);
        }
      } else {
        setInformation(content);
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

  useLayoutEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.textContent = placeholder;
      const height = contentEditableRef.current.getBoundingClientRect().height;
      setMinH(height);
      contentEditableRef.current.textContent = '';
    }
  }, []);

  return (
    <Box pos="relative" w="full">
      <Box
        p={5}
        pb={7}
        borderRadius="2xl"
        ref={contentEditableRef}
        contentEditable
        width="full"
        bg="white"
        minH={minH}
        onPaste={handlePaste}
        pos="relative"
        onInput={handleInput}
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
          setCursorPosition(information.length);
        }}
      >
        {information.length}/{maxLength}
      </Text>
    </Box>
  );
}
