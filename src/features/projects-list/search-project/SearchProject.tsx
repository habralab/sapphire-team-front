import { IActiveInput, IInput } from '~/shared/types/SearchInput';
import { SearchInputForm } from '~/shared/ui/SearchInput';

export const SearchProject = ({ activeInput }: IActiveInput) => {
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
    </>
  );
};
