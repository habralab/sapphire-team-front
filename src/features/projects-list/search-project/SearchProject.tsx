import { Button } from '@chakra-ui/react';

import { IActiveInput, IInput } from '~/shared/types/SearchInput';
import { SearchInputForm } from '~/shared/ui/SearchInput';

export const SearchProject = ({ isActiveInput, activeInput }: IActiveInput) => {
  const handleSumbit = (value: IInput) => {
    console.log(value);
  };
  return (
    <>
      <SearchInputForm
        onSubmit={handleSumbit}
        activeInput={activeInput}
        placeholder="Найти проект"
      />
      {isActiveInput && (
        <Button
          flex={0}
          height="36px"
          minW={'53px'}
          ml={'8px'}
          onClick={() => {
            activeInput(false);
          }}
          fontSize={{
            base: 'sm',
            sm: '2xl',
            md: '4xl',
          }}
          fontWeight={400}
        >
          Отмена
        </Button>
      )}
    </>
  );
};
