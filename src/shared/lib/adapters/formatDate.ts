import { format } from 'date-fns';

export const formatDateNotification = (date: string) =>
  format(new Date(date), 'dd.MM.yy');

export const formatDate = (date: string) => format(new Date(date), 'dd MMMM yyyy');

export const formatTime = (date: string) => format(new Date(date), 'HH:mm');
