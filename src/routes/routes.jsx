import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ListedBooks from '../pages/ListedBooks';
import PagesToRead from '../pages/PagesToRead';
import Home from '../pages/Home';
import Book from '../pages/Book';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        // index: true,
        path: '/',
        element: <Home />,
        loader: () => fetch('/allBooks.json'),
      },
      {
        path: '/book/:bookId',
        element: <Book />,
      },
      { path: '/listedBooks', element: <ListedBooks /> },
      { path: '/pagesToRead', element: <PagesToRead /> },
    ],
  },
]);
