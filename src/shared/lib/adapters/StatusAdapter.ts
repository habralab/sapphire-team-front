export const StatusAdapter = (name: string) => {
  switch (name) {
    case 'preparation':
      return 'Скоро начнётся';
    case 'in_work':
      return 'В работе';
    case 'finished':
      return 'Проект завершён';
    default:
      return 'Статус не найден';
  }
};
