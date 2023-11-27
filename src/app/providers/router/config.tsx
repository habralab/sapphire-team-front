import { Navigate } from 'react-router-dom';

import { ChatsPage, ChatsPageDesktop } from '~/pages/chats';
import { DialogPage } from '~/pages/dialog';
import { MainPage } from '~/pages/main';
import { NotFoundPage } from '~/pages/not-found';
import { NotificationPage } from '~/pages/notification';
import { NotificationsPage } from '~/pages/notifications';
import { OnboardingPage } from '~/pages/onboarding';
import { PositionPage } from '~/pages/position';
import { ProfileMePage, ProfilePageDesktop, ProfileUserPage } from '~/pages/profile';
import {
  AddProjectPage,
  ProjectPage,
  ProjectsPage,
  ProjectsPageDesktop,
} from '~/pages/projects';
import { SearchPage, SearchPageDesktop } from '~/pages/search';
import {
  NotificationsSettingsPage,
  ProfileSettingsPage,
  SettingsPage,
} from '~/pages/setting';

import { PATHS } from '~/shared/lib/router';

export const normalRoutes = [
  {
    path: '*',
    view: {
      base: Navigate.bind(null, {
        to: PATHS.notFound,
        replace: true,
      }),
    },
  },
  {
    path: PATHS.root,
    view: {
      base: MainPage,
    },
  },
  {
    path: PATHS.notFound,
    view: {
      base: NotFoundPage,
    },
  },
  {
    path: PATHS.profile,
    view: { base: ProfileUserPage },
  },
  {
    path: PATHS.profileMe,
    view: {
      base: ProfileMePage,
      desktop: ProfilePageDesktop,
    },
  },
  {
    path: PATHS.searchProject,
    view: { base: ProjectPage },
  },
  {
    path: PATHS.search,
    view: { base: SearchPage, desktop: SearchPageDesktop },
  },
  {
    path: PATHS.onboarding,
    view: { base: OnboardingPage },
  },
  {
    path: PATHS.projects,
    view: {
      base: ProjectsPage,
      desktop: ProjectsPageDesktop,
    },
  },
  // {
  //   path: PATHS.chats,
  //   view: {
  //     base: ChatsPage,
  //     desktop: ChatsPageDesktop,
  //   },
  // },
  {
    path: PATHS.chats,
    view: {
      base: NotFoundPage,
    },
  },
  {
    path: PATHS.project,
    view: { base: ProjectPage },
  },
  {
    path: PATHS.position,
    view: { base: PositionPage },
  },
  {
    path: PATHS.addProject,
    view: { base: AddProjectPage },
  },
  // { path: PATHS.dialog, view: { base: DialogPage, desktop: ChatsPageDesktop } },
  {
    path: PATHS.dialog,
    view: {
      base: NotFoundPage,
    },
  },
  {
    path: PATHS.notifications,
    view: { base: NotificationsPage },
  },
  {
    path: PATHS.notification,
    view: { base: NotificationPage },
  },
  { path: PATHS.settings, view: { base: SettingsPage } },
  { path: PATHS.profileSettings, view: { base: ProfileSettingsPage } },
  { path: PATHS.notificationsSettings, view: { base: NotificationsSettingsPage } },
];
