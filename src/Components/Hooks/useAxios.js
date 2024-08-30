import axios from 'axios';

const useAxios = () => {
  const fetchData = async (url, data, err) => {
    try {
      const result = await axios.get(url);
      if (data) data(result.data);
    } catch (error) {
      err(error);
    }
  };

  return {
    fetchData,
  };
};
export default useAxios;
