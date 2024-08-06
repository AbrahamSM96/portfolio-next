import { useState, useEffect } from "react";

export function useFetchAPI(api) {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    setError(null);
    setLoad(true);
    try {
      const response = await fetch(api);
      const datajson = await response.json();
      setLoad(false);
      setData(datajson);
      setError(null);
    } catch (error) {
      setLoad(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return { data, load, error, setLoad };
}
