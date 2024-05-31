import { useState, useEffect } from 'react';

export default function useUserList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const loading = data === null && error === null;

  useEffect(() => {
    let ignore = false;
    const getData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        if (!response.ok)
          throw new Error(
            `Fetch error: ${response.status}, ${response.statusText}`,
          );

        if (!ignore) {
          const json = await response.json();
          setData(json.data);
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    getData();

    return () => (ignore = true);
  }, []);

  return { data, loading, error };
}
