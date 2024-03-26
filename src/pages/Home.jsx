import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero';
import BookCard from '../components/BookCard';

const Home = () => {
  const books = useLoaderData();

  return (
    <div>
      <Hero />

      <div>
        <h1 className='text-4xl font-bold text-center mt-8 mb-14'>Books</h1>
        <div className='container mx-auto grid lg:grid-cols-3 space-y-4 '>
          {books.map((books) => (
            <BookCard books={books} key={books.bookId} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
