import { Stack } from '@chakra-ui/react';

import { NotificationItem } from '~/entities/user';

export function NotificationList() {
  const notifications = [
    { status: 'Вы приняты в команду', project: 'Сервис онлайн-образования' },
    { status: 'Ваша заявка отклонена', project: 'Сервис онлайн-образования' },
    { status: 'Участник покинул проект', project: 'Сервис онлайн-образования' },
    { status: 'Новая заявка на проект', project: 'Сервис онлайн-образования' },
    { status: 'Проект закрыт', project: 'Сервис онлайн-образования' },
    { status: 'Ваша публикация одобрена', project: 'Сервис онлайн-образования' },
    { status: 'Оставьте отзыв об участниках', project: 'Сервис онлайн-образования' },
    { status: 'Требуется внести правки', project: 'Сервис онлайн-образования' },
  ];

  return (
    <Stack spacing={0}>
      {notifications.map((notification, i) => (
        <NotificationItem
          key={i}
          status={notification.status}
          project={notification.project}
        />
      ))}
    </Stack>
  );
}
