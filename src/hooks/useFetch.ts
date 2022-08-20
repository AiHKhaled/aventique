/* eslint-disable */

import { useEffect, useState } from "react";
import axios from "@/api/axios";

const useFetch = (url: string) => {
  const [fetchData, setFetchData] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true); //loading set true when the request started
      await axios
        .get(url)
        .then(({ data }) => {
          setFetchData(data);
        })
        .catch((error: any) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetch();
  }, [url]);

  return { fetchData, loading, error };
};

export default useFetch;
