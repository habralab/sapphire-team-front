import { format } from 'date-fns';

export const formatDate = (date: string) => format(new Date(date), 'dd MMMM yyyy');

export const formatTime = (date: string) => format(new Date(date), 'HH:mm');
