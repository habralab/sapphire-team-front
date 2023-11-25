export const DateAdapter = (deadline: string) =>
  new Date(deadline)
    .toLocaleDateString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);
