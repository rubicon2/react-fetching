import { useState, useEffect } from 'react';
import asyncTimer from '../asyncTimer';

  const [data, setData] = useState(null);
export default function useFetch(url, maxDelayMillis = 0, options = {}) {
  const [error, setError] = useState(null);
  const loading = error === null && data === null;

  useEffect(() => {
    let ignore = false;
    const getData = async () => {
      try {
        // Add a random delay so we can actually see the components in their loading state... internet is too fast!
        await asyncTimer(Math.random() * maxDelayMillis);
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
