export const adapterCard = (
  title: string,
  date: string | null,
  description: string | null,
) => {
  let formatDate;
  if (date) formatDate = new Date(date).toLocaleDateString('ru');
  return { title, description: description ?? '', date: formatDate ?? '' };
};
