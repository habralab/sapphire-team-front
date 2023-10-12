import { InputProps, SearchInput } from '~/shared/ui';

export const SearchProject = () => {
  const handleSumbit = (value: InputProps) => {
    console.log(value);
  };
  return <SearchInput onSubmit={handleSumbit} placeholder="Найти проект" />;
};
