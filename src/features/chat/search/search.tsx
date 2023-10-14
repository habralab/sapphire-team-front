import { data } from '~/entities/chat';

export function search(value: string) {
  return data.filter((chat) => {
    return value.toLowerCase() === ''
      ? chat
      : chat.name.toLowerCase().includes(value) ||
          chat.title.toLowerCase().includes(value);
  });
}
