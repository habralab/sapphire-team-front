export interface MessageType {
  message: string;
  status: 'sent' | 'read' | 'unread' | 'error';
  date: string;
}

export interface ChatCardProps {
  id: number;
  title: string;
  name: string;
  role: string;
  messages: MessageType[];
}
