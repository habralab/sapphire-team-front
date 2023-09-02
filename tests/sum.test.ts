import { sum } from './sum';

// отладка тестов напрямую не работает, переходим во вкладку отладка
test('adds 1 and 2 equls 3', () => {
  //Arrange
  const a = 1;
  const b = 2;

  //Act
  const answer = sum(a, b);

  //Assert
  expect(answer).toBe(3);
});

// vitest расширение имеет проблемы при интерактивном запуске тестов с each
// https://github.com/vitest-dev/vscode/issues/133
// запуск из консоли отрабатывает
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', (a, b, expected) => {
  expect(a + b).toBe(expected);
});
