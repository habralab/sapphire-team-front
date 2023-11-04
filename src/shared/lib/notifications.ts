export interface NotificationsDto {
  status: string;
  id: number;
  project: string;
  category: string;
}

export const notifications: NotificationsDto[] = [
  {
    status: 'Вы приняты в команду',
    id: 1,
    project: 'Сервис онлайн-образования',
    category: 'response',
  },
  {
    status: 'Ваша заявка отклонена',
    id: 2,
    project: 'Сервис онлайн-образования',
    category: 'response',
  },
  {
    status: 'Участник покинул проект',
    id: 3,
    project: 'Сервис онлайн-образования',
    category: 'project',
  },
  {
    status: 'Новая заявка на проект',
    id: 4,
    project: 'Сервис онлайн-образования',
    category: 'project',
  },
  {
    status: 'Проект закрыт',
    id: 5,
    project: 'Сервис онлайн-образования',
    category: 'project',
  },
  {
    status: 'Ваша публикация одобрена',
    id: 6,
    project: 'Сервис онлайн-образования',
    category: 'response',
  },
  {
    status: 'Оставьте отзыв об участниках',
    id: 7,
    project: 'Сервис онлайн-образования',
    category: 'review',
  },
  {
    status: 'Требуется внести правки',
    id: 8,
    project: 'Сервис онлайн-образования',
    category: 'project',
  },
];
