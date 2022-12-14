import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData(API) {
      const response = await axios(API);
      setProducts(response.data);
    }
    fetchData(API);
  }, [API]);

  return products;
};

export default useGetProducts;
