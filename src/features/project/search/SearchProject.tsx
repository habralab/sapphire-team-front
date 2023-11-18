import { SearchInput } from '~/shared/ui/SearchInput';

interface SearchProjectProps {
  onChange: (value: string) => void;
}

export const SearchProject = ({ onChange }: SearchProjectProps) => {
  return <SearchInput onChange={onChange} placeholder="Найти проект" />;
};
