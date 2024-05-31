import { useState, useEffect } from 'react';

export default function useUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const loading = error === null && data === null;

  useEffect(() => {
    let ignore = false;
    const getUserData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/1');
        if (!response.ok)
          throw new Error(
            `Fetch error: ${response.status} - ${response.statusText}`,
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

    getUserData();

    return () => (ignore = true);
  }, []);

  return { data, loading, error };
}
