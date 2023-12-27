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

export const routerPaths = [
  {
    path: '*',
    Component: Navigate.bind(null, {
      to: PATHS.notFound,
      replace: true,
    }),
  },
  {
    path: PATHS.root,
    Component: MainPage,
  },
  {
    path: PATHS.notFound,
    Component: NotFoundPage,
  },
  {
    path: PATHS.profile,
    Component: ProfileUserPage,
  },
  {
    path: PATHS.profileMe,
    Component: ProfileMePage,
  },
  {
    path: PATHS.searchProject,
    Component: ProjectPage,
  },
  {
    path: PATHS.search,
    Component: SearchPage,
  },
  {
    path: PATHS.onboarding,
    Component: OnboardingPage,
  },
  {
    path: PATHS.projects,
    Component: ProjectsPage,
  },
  // {
  //   path: PATHS.chats,
  //   Component: ChatsPage,
  // },
  {
    path: PATHS.chats,
    Component: NotFoundPage,
  },
  {
    path: PATHS.project,
    Component: ProjectPage,
  },
  {
    path: PATHS.position,
    Component: PositionPage,
  },
  {
    path: PATHS.addProject,
    Component: AddProjectPage,
  },
  // {
  //   path: PATHS.dialog,
  //   Component: DialogPage,
  // },
  {
    path: PATHS.dialog,
    Component: NotFoundPage,
  },
  {
    path: PATHS.notifications,
    Component: NotificationsPage,
  },
  {
    path: PATHS.notification,
    Component: NotificationPage,
  },
  { path: PATHS.settings, Component: SettingsPage },
  { path: PATHS.profileSettings, Component: ProfileSettingsPage },
  { path: PATHS.notificationsSettings, Component: NotificationsSettingsPage },
];
