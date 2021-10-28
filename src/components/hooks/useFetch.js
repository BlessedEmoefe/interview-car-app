import {useEffect, useState} from 'react';

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            'X-Parse-Application-Id':
              'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z',
            'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW',
          },
        });
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {data, loading, error};
};
