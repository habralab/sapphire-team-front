import { Route, Routes, BrowserRouter } from 'react-router-dom';

import CommentsPage from './comments';

const routes = [
  { path: '/', element: <>home</> },
  { path: '/about', element: <>about</> },
  { path: '/comments', element: <CommentsPage /> },
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
