import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ListedBooks from '../pages/ListedBooks';
import PagesToRead from '../pages/PagesToRead';
import Home from '../pages/Home';
import Book from '../pages/Book';
// import ReadBooks from '../components/ReadBooks';
// import WishList from '../components/WishList';
import NewlyArived from '../pages/NewlyArived';
import TrandingBooks from '../pages/TrandingBooks';
import Error from '../layouts/Error';
import ListBookCard from '../components/ListBookCard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
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
        loader: () => fetch('/allBooks.json'),
      },
      {
        path: '/newlyArived',
        element: <NewlyArived />,
      },
      {
        path: '/trandingBook',
        element: <TrandingBooks />,
      },
      {
        path: '/listedBooks',
        element: <ListedBooks />,
        // children: [
        //   { index: true, element: <ListBookCard /> },
        //   { path: 'wishlist', element: <ListBookCard /> },
        // ],
      },
      { path: '/pagesToRead', element: <PagesToRead /> },
    ],
  },
]);
