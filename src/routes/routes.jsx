import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ListedBooks from '../pages/ListedBooks';
import PagesToRead from '../pages/PagesToRead';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('allBooks.json'),
      },
      { path: '/listedBooks', element: <ListedBooks /> },
      { path: '/pagesToRead', element: <PagesToRead /> },
    ],
  },
]);
