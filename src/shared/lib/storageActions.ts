/* eslint-disable @typescript-eslint/no-unsafe-return */
export const saveInStorage = (
  key: string,
  value: string[] | { value: string; label: string }[] | string,
) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const deleteKeyFromStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export const loadSkillsFromStorage = (): { value: string; label: string }[] => {
  const data = sessionStorage.getItem('skills');
  return data ? JSON.parse(data) : [];
};

export const loadSpecsFromStorage = (): string[] => {
  const data = sessionStorage.getItem('specs');
  return data ? JSON.parse(data) : [];
};

export const loadDataFromStorage = (): string => {
  const data = sessionStorage.getItem('date');
  return data ? JSON.parse(data) : '';
};
