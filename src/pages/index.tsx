import { Route, Routes, BrowserRouter } from 'react-router-dom';

import CommentsPage from './comments';
import { ParticipantPage } from './participant';

const routes = [
  { path: '/', element: <>home</> },
  { path: '/about', element: <>about</> },
  { path: '/comments', element: <CommentsPage /> },
  { path: '/candidat', element: <ParticipantPage /> },
];

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((props) => (
          <Route {...props} key={props.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
