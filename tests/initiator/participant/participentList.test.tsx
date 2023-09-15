import { Button } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { ParticipantPage } from '~/pages/participant';

import CandidatCard from '~/entities/candidat';

const server = setupServer();

describe('проверка логики карточки участника', () => {
  test('проверка доступности кнопок при нерассмотренной заявке', () => {
    const reject = <Button>Одобрить</Button>;
    const add = <Button>Отклонить</Button>;
    const candidat = { id: '1', text: 'Заявка не рассмотрена', name: 'Вася Пупкин' };

    render(
      <CandidatCard reject={reject} add={add} candidat={candidat} key={candidat.id} />,
    );

    expect(screen.getByText('Заявка не рассмотрена')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /одобрить/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /отклонить/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /одобрить/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /отклонить/i })).toBeEnabled();
  });

  test('проверка логики кнопки одобрить', async () => {
    const candidat = { id: '1', text: 'Заявка одобрена', name: 'Вася Пупкин' };

    const reject = (
      <Button type="button" isDisabled={candidat.text === 'Заявка одобрена'}>
        Одобрить
      </Button>
    );
    const add = <Button type="button">Отклонить</Button>;

    render(
      <CandidatCard reject={reject} add={add} candidat={candidat} key={candidat.id} />,
    );

    await userEvent.click(screen.getByRole('button', { name: /одобрить/i }));

    expect(screen.getByText('Заявка одобрена')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /одобрить/i })).toBeDisabled();
  });

  test('проверка логики кнопки отклонить', async () => {
    const candidat = { id: '1', text: 'Заявка отклонена', name: 'Вася Пупкин' };

    const reject = (
      <Button type="button" isDisabled={candidat.text === 'Заявка одобрена'}>
        Одобрить
      </Button>
    );
    const add = (
      <Button type="button" isDisabled={candidat.text === 'Заявка отклонена'}>
        Отклонить
      </Button>
    );

    render(
      <CandidatCard reject={reject} add={add} candidat={candidat} key={candidat.id} />,
    );

    await userEvent.click(screen.getByRole('button', { name: /отклонить/i }));

    expect(screen.getByText('Заявка отклонена')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /отклонить/i })).toBeDisabled();
  });
});

describe('проверка логики страницы управления участниками', () => {
  test.skip('проверка на валидный статус проекта', () => {
    server.use(
      rest.get('/api/project/status', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: 'Идет набор в команду' }));
      }),
    );

    render(<ParticipantPage />);

    expect(screen.getByText('Идет набор в команду')).toBeInTheDocument();

    expect(screen.getAllByRole('button')).toBeEnabled();
    expect(screen.getAllByRole('button', { name: /одобрить/i })).toBeEnabled();
  });

  test.skip('проверка на невалидный статус проекта', () => {
    render(<ParticipantPage />);

    server.use(
      rest.get('/api/project/status', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: 'Прием заявок завершен' }));
      }),
    );

    expect(
      screen.getAllByRole('heading', { name: /прием заявок завершен/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('button', { name: /отклонить/i })).toBeDisabled();
    expect(screen.getAllByRole('button', { name: /одобрить/i })).toBeDisabled();
  });

  test.skip('проверка на невалидный статус проекта, если страница не обновлена', async () => {
    render(<ParticipantPage />);

    server.use(
      rest.get('/api/project/status', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ message: 'статус проета не позволяет принимать заявки' }),
        );
      }),
    );

    expect(screen.getByText('Идет набор в команду')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /одобрить/i }));

    expect(
      screen.getByRole('toast', { name: 'статус проета не позволяет принимать заявки' }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /отклонить/i }));

    expect(
      screen.getByRole('toast', { name: 'статус проета не позволяет отклонять заявки' }),
    ).toBeInTheDocument();
  });
});
