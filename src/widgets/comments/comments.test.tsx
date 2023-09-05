/*
Блок комментарий
Создаем комментарий и отобржаем на странице
Обновление счетчика комментариев
*/

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Comments, { CommentsForm } from './Comments';

const formHandler = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onSubmit: (values: CommentsForm) => {},
};

test('не добавлять комментарий, если текст комментария пустой', async () => {
  const onSubmitSpy = vi.spyOn(formHandler, 'onSubmit');

  render(<Comments onSubmit={formHandler.onSubmit} />);

  expect(screen.getByRole('heading', { name: 'Что думаете?' })).toBeInTheDocument();

  const commentInput = screen.getByRole('textbox', { name: /comment/i });
  await userEvent.clear(commentInput);

  const sendButton = screen.getByRole('button', { name: /send/i });
  await userEvent.click(sendButton);

  expect(onSubmitSpy).not.toHaveBeenCalled();
});
