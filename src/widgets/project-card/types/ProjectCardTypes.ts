export interface IProjectCard {
  id: number;
  status: 'Скоро начнётся' | 'Проект идёт' | 'Проект завершён';
  title: string;
  date: string;
  description: string;
  tags?: ('Разработка' | 'Тестирование' | 'Аналитика' | 'Дизайн' | 'Менеджмент')[];
}

// export interface IProjectCardDto {
//   id: number;
//   status: 'Скоро начнётся' | 'Проект идёт' | 'Проект завершён';
//   type?: 'all' | 'my-project';
//   tags?: ('Разработка' | 'Тестирование' | 'Аналитика' | 'Дизайн' | 'Менеджмент')[];
// }
