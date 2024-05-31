import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const loading = error === null && data === null;

  useEffect(() => {
    let ignore = false;
    const getData = async () => {
      try {
        const response = await fetch(url, options);
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

    getData();

    return () => (ignore = true);
  }, [url, options]);

  return { data, loading, error };
}
