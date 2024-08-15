
import { useState } from 'react';
import {axiosInstance} from '../../lib/axios';
import { useQuery } from '@tanstack/react-query';

const useFetch = (endpoint) => {
   const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
    // const fetchData = async () => {
    //   try {
    //     const response = await axiosInstance.get(`/${endpoint}`);
    //     setData(response.data);
    //   } catch (err) {
        
    //     setError(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };


    //saya pake lib useQuery aja

   
    const fectDataQuery =  useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await axiosInstance.get(`/${endpoint}`);

        setData(response.data);
        return response.data;
      },
      retry: 1,
      
    })
    console.log(fectDataQuery);
  return { data, isLoading : fectDataQuery.isLoading, isError: fectDataQuery.isError, error : fectDataQuery.error };
};

export default useFetch;
