import { IInput, SearchInput } from '~/shared/ui/SearchInput';

export const SearchProject = () => {
  const handleSumbit = (value: IInput) => {
    console.log(value);
  };
  return <SearchInput onSubmit={handleSumbit} placeholder="Найти проект" />;
};
