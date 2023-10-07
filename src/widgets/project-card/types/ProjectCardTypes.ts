export interface ProjectCardDto {
  id: number;
  status: string;
  title: string;
  date: string;
  description: string;
  tags?: ('Разработка' | 'Тестирование' | 'Аналитика' | 'Дизайн' | 'Менеджмент')[];
}
