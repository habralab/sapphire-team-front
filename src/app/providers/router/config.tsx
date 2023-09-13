import { BlankPage } from '~/pages/BlankPage';
import { NotFound } from '~/pages/NotFound';

const appClosed = [{ path: '*', element: <BlankPage /> }];

const normalRoutes = [{ path: '*', element: <NotFound /> }];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
