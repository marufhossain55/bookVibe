import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ListedBooks from '../pages/ListedBooks';
import PagesToRead from '../pages/PagesToRead';
import Home from '../pages/Home';
import Book from '../pages/Book';
import ReadBooks from '../components/ReadBooks';
import WishList from '../components/WishList';

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
      {
        path: '/listedBooks',
        element: <ListedBooks />,
        children: [
          { index: true, element: <ReadBooks /> },
          { path: 'wishlist', element: <WishList /> },
        ],
      },
      { path: '/pagesToRead', element: <PagesToRead /> },
    ],
  },
]);
