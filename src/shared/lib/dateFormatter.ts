export const formatDate = (date: string) => new Date(date).toISOString().slice(0, -1);
