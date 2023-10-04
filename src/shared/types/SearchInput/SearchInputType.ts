export interface ISearchInput extends IActiveInput {
  placeholder?: string;
  value?: string;
  onSubmit: (value: IInput) => void;
}

export interface IInput {
  title: string;
}

export interface IActiveInput {
  isActiveInput?: boolean;
  activeInput: (value: boolean) => void;
}
