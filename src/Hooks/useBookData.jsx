import { useEffect, useState } from 'react';

const useBookData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch('/allBooks.json');
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};
export default useBookData;
