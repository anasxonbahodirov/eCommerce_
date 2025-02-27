import { useState, useEffect } from "react";

export const useGet = (api) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(api);
        if (!res.ok) {
          throw new Error("Nimadir Xato"); 
        }
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false); 
      }
    };

    getData();
  }, [api]); 

  return { data, error, loading };
};