import { SearchInput } from '~/shared/ui/SearchInput';

interface SearchProjectProps {
  onChange: (value: string) => void;
  placeholder: string;
}

export const SearchProject = ({ onChange, placeholder }: SearchProjectProps) => {
  return <SearchInput onChange={onChange} placeholder={placeholder} />;
};
