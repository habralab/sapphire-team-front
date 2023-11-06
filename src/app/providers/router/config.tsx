import { Navigate } from 'react-router-dom';

import { ChatsPage, ChatsPageDesktop, NotAuthChatsPage } from '~/pages/chats';
import { DialogPage } from '~/pages/dialog';
import { MainPage } from '~/pages/main';
import { NotFoundPage } from '~/pages/not-found';
import {
  NotificationPage,
  NotificationPageDesktop,
  NotificationsPage,
  NotificationsPageDesktop,
} from '~/pages/notifications';
import { NotAuthProfilePage, ProfilePage, ProfilePageDesktop } from '~/pages/profile';
import {
  AddProjectPage,
  NotAuthProjectsPage,
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
    path: PATHS.notFound,
    view: {
      base: <NotFoundPage />,
    },
  },
  {
    path: PATHS.profile,
    view: { base: <ProfilePage />, desktop: <ProfilePageDesktop /> },
  },
  {
    path: PATHS.profileMe,
    view: {
      base: <ProfilePage />,
      desktop: <ProfilePageDesktop />,
      notAuthBase: <NotAuthProfilePage />,
      notAuthDesktop: <NotFoundPage />,
    },
  },
  {
    path: PATHS.projects,
    view: {
      base: <ProjectsPage />,
      desktop: <ProjectsPageDesktop />,
      notAuthBase: <NotAuthProjectsPage />,
    },
  },
  {
    path: PATHS.project,
    view: { base: <ProjectPage /> },
  },
  {
    path: PATHS.addProject,
    view: { base: <AddProjectPage /> },
  },
  { path: PATHS.search, view: { base: <SearchPage />, desktop: <SearchPageDesktop /> } },
  {
    path: PATHS.chats,
    view: {
      base: <ChatsPage />,
      desktop: <ChatsPageDesktop />,
      notAuthBase: <NotAuthChatsPage />,
    },
  },
  { path: PATHS.dialog, view: { base: <DialogPage />, desktop: <ChatsPageDesktop /> } },
  {
    path: PATHS.notifications,
    view: { base: <NotificationsPage />, desktop: <NotificationsPageDesktop /> },
  },
  {
    path: PATHS.notification,
    view: { base: <NotificationPage />, desktop: <NotificationPageDesktop /> },
  },
  { path: PATHS.settings, view: { base: <SettingsPage /> } },
  { path: PATHS.profileSettings, view: { base: <ProfileSettingsPage /> } },
  { path: PATHS.notificationsSettings, view: { base: <NotificationsSettingsPage /> } },
  {
    path: PATHS.root,
    view: {
      base: <MainPage />,
    },
  },
  {
    path: '*',
    view: {
      base: <Navigate to={'404'} replace />,
    },
  },
];
