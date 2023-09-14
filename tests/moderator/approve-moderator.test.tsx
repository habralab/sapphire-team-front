import { Button } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

import { server } from '~/shared/api/mock';

describe.skip('проверка функционала кнопки "одобрить"', () => {
  test('при нажатии кнопки статус проекта меняется на "одобрен" и отображается зеленый tooltip', async () => {
    render(<Button />);

    expect(screen.getByText(/черновик/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /одобрить/i }));

    expect(screen.getByText(/одобрен/i)).toBeInTheDocument();
    expect(screen.getByText(/проект одобрен/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /одобрить/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /отклонить/i })).toBeDisabled();
  });
  test('при нажатии кнопки, отображается желтый tooltip, с информацие что проект уже был одобрен', async () => {
    render(<Button />);

    expect(screen.getByText(/черновик/i)).toBeInTheDocument();

    server.use(
      rest.post('/api/project/reject', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: 'Проект уже одобрен' }));
      }),
    );

    await userEvent.click(screen.getByRole('button', { name: /одобрить/i }));

    expect(screen.getByText(/проект уже одобрен/i)).toBeInTheDocument();
    expect(screen.getByText(/одобрен/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /одобрить/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /отклонить/i })).toBeDisabled();
  });
});
