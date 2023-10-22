import { SearchInput } from '~/shared/ui/SearchInput';

export const SearchProject = () => {
  const handleSumbit = (value: string) => {
    console.log(value);
  };
  return <SearchInput onChange={handleSumbit} placeholder="Найти проект" />;
};
