import { useAuth } from '~/shared/hooks';

import { ChatsPageBase } from './ChatsPageBase';
import { NotAuthChatsPage } from './NotAuthChatsPage';

export const ChatsPage = () => {
  const user = useAuth();
  return !user.userId ? <NotAuthChatsPage /> : <ChatsPageBase />;
};
