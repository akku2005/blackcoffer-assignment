// src/hooks/useFetchData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, filters) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const storedData = localStorage.getItem("fetchedData");
        const storedFilters = localStorage.getItem("appliedFilters");

        if (storedData && storedFilters === JSON.stringify(filters)) {
          setData(JSON.parse(storedData));
        } else {
          const response = await axios.get(url, { params: filters });
          setData(response.data);
          localStorage.setItem("fetchedData", JSON.stringify(response.data));
          localStorage.setItem("appliedFilters", JSON.stringify(filters));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, filters]);

  return { data, loading, error };
};

export default useFetchData;
