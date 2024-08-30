import axios from 'axios';
import { useState } from 'react';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async (url, onSuccess) => {
    try {
      setLoading(true);
      const result = await axios.get(url);
      setResponse(result.data);
      if (onSuccess) onSuccess(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    response,
    loading,
    error,
    fetchData,
  };
};
export default useAxios;
