import { useEffect, useState } from 'react';

const useItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dataFetch = async () => {
      try {
        const response = await fetch(
          'https://fruits-valley-wirehouse-server.vercel.app/services'
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);
  return [items, setItems, loading];
};

export default useItems;
