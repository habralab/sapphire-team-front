export interface MessageType {
  message: string;
  status: string;
  date: string;
}

export interface ChatDto {
  id: number;
  title: string;
  name: string;
  role: string;
  messages: MessageType[];
}
