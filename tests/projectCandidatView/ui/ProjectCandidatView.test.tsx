import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProjectCandidatView from './ProjectCandidatView';

test.skip('возможность подать заявку', async () => {
  render(<ProjectCandidatView />);

  expect(screen.getByText(/^Статус:/)).toHaveTextContent('Статус: Не начат'); // Не уверен в необходимости данной проверки

  const button = screen.getByRole('button', { name: 'Подать заявку' });

  await userEvent.click(button);

  expect(screen.getByText('Заявка отправлена')).toBeInTheDocument();

  expect(button).toBeDisabled();

  expect(
    screen.getByRole('toast', { name: 'Заявка успешно отправлена' }),
  ).toBeInTheDocument();
});

test.skip('заявку невозможно подать, поскольку закончен прием заявок на роль', async () => {
  render(<ProjectCandidatView />);

  expect(screen.getByText(/^Статус:/)).toHaveTextContent('Статус: Не начат');

  const button = screen.getByRole('button', { name: 'Подать заявку' });

  await userEvent.click(button);

  expect(screen.getByText('Заявка отклонена')).toBeInTheDocument();

  expect(button).toBeDisabled();

  expect(
    screen.getByRole('toast', { name: 'Закончен прием заявок на эту роль' }),
  ).toBeInTheDocument();
});

test.skip('заявку невозможно подать, поскольку закончен прием заявок', () => {
  render(<ProjectCandidatView />);

  expect(screen.getByText(/^Статус:/)).toHaveTextContent('Статус: Прием заявок завершен');

  expect(screen.queryByRole('button', { name: 'Подать заявку' })).not.toBeInTheDocument();
});
