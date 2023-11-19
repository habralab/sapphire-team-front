import { BasePageProps } from '~/shared/lib/router';

import { ChatsPageBase } from './ChatsPageBase';
import { NotAuthChatsPage } from './NotAuthChatsPage';

export const ChatsPage = ({ user }: BasePageProps) => {
  return !user.userId ? <NotAuthChatsPage /> : <ChatsPageBase />;
};
