import { InputProps, SearchInput } from '~/shared/ui/SearchInput';

export const SearchProject = () => {
  const handleSumbit = (value: InputProps) => {
    console.log(value);
  };
  return <SearchInput onSubmit={handleSumbit} placeholder="Найти проект" />;
};
