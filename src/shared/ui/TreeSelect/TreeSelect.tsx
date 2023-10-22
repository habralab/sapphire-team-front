import { CloseIcon } from '@chakra-ui/icons';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { ConfigProvider, TreeSelect as AntdTreeSelect } from 'antd';
import { useRef, useState } from 'react';

import { SearchInput } from '~/shared/ui/SearchInput';

const treeData = [
  {
    value: 'Разработка',
    title: 'Разработка',
    checkable: false,
    children: [
      {
        value: 'Фронтенд',
        title: 'Фронтенд',
      },
      {
        value: 'Бекенд',
        title: 'Бекенд',
      },
    ],
  },
  {
    value: 'Дизайн',
    title: 'Дизайн',
    checkable: false,
    children: [
      {
        value: 'UX/UI дизайнер',
        title: 'UX/UI дизайнер',
      },
      {
        value: 'Продуктовый дизайнер',
        title: 'Продуктовый дизайнер',
      },
    ],
  },
];

export const TreeSelect = () => {
  const int = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [value, setValue] = useState<string[]>();

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSizeLG: 14,
          fontFamily: `'Inter', sans-serif`,
          zIndexPopupBase: 2000,
        },
        components: {
          Select: {
            borderRadiusLG: 16,
            colorPrimaryHover: '#3182ce',
            controlOutline: '#3182ce',
            controlOutlineWidth: 1,
            borderRadius: 12,
          },
        },
      }}
    >
      <AntdTreeSelect
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Ваши специализации"
        showSearch={false}
        multiple
        treeCheckable
        treeExpandAction="click"
        searchValue={input}
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
        maxTagCount={'responsive'}
        size="large"
        dropdownRender={(menu) => (
          <>
            <HStack mb={2}>
              <SearchInput
                ref={int}
                placeholder="Найти специальность"
                onChange={(value) => {
                  setInput(value);
                }}
                value={input}
              />
              <IconButton
                aria-label="clear"
                onClick={() => {
                  setValue(undefined);
                }}
                icon={<CloseIcon fontSize="sm" />}
              />
            </HStack>
            <Box onClick={() => int.current?.blur()}>{menu}</Box>
          </>
        )}
      />
    </ConfigProvider>
  );
};
