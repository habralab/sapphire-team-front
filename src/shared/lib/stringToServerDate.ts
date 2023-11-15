export const stringToServerDate = (date: string) =>
  new Date(date).toISOString().slice(0, -1);
