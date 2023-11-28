export const PROJECT_STATUSES = {
  preparation: 'preparation',
  in_work: 'in_work',
  finished: 'finished',
} as const;

export const PROJECT_STATUSES_MESSAGES = {
  [PROJECT_STATUSES.preparation]: 'Скоро начнётся',
  [PROJECT_STATUSES.in_work]: 'В работе',
  [PROJECT_STATUSES.finished]: 'Проект завершён',
};

export const PARTICIPANT_STATUSES = {
  request: 'request',
  joined: 'joined',
  declined: 'declined',
  left: 'left',
} as const;
