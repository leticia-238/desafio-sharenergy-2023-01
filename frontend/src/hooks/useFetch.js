import { useEffect, useState } from 'react';

const useFetch = (fetchApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedData = await fetchApi();
      setData(fetchedData);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchApi]);

  return { data, isLoading };
};

export default useFetch;
