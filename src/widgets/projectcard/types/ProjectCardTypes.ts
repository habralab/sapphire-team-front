import { ICard } from '~/entities/projectcard';

export interface IProjectCard extends ICard {
  id: number;
  status: 'Скоро начнётся' | 'Проект идёт' | 'Проект завершён';
  type?: 'all' | 'my-project';
  tags?: ('Разработка' | 'Тестирование' | 'Аналитика' | 'Дизайн' | 'Менеджмент')[];
}
