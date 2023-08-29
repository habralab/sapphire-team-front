import { Route, Routes, BrowserRouter } from 'react-router-dom';

const routes = [
  { path: '/', element: <>home</> },
  { path: '/about', element: <>about</> },
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
