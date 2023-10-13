import { Link } from 'react-router-dom';

import { SText } from '~/shared/ui/SText';

export function DialogPage() {
  return (
    <>
      <Link to={'/chats'}>назад</Link>
      <SText>Текст сообщений</SText>
    </>
  );
}
