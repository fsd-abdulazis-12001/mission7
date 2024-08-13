import { useState } from 'react';
import axios from 'axios';
import useFetch from './useFetch';
import { Notification } from '../UI/Elements/Notification';

const useDaftarSaya = (Endpoint) => {
  const { data: listdaftarsaya, loading, error, setData: setListDaftarSaya } = useFetch(Endpoint);
  const [isProcessing, setIsProcessing] = useState(false);

  const addDaftarSaya = async (idf, image, neweps, top10, title) => {
    try {
      setIsProcessing(true);
  
      // Check if the item already exists in the list
      const exists = listdaftarsaya.some(item => item.idf == idf);
  
      if (exists) {
        Notification('Sudah Ada di Daftar Kamu', 'error');
       
        return;
      }
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/${Endpoint}`, {
        idf,
        image,
        neweps,
        top10,
        title
      });
  
      setListDaftarSaya([...listdaftarsaya, response.data]);
      Notification(`Berhasil Menambahkan ${title} ke Daftar Kamu`, 'promise');
    } catch (err) {
      console.error('Error adding item:', err);
      Notification('Gagal Menambahkan ke Daftar Kamu', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  const removeDaftarSaya = async (idf) => {
    try {
      setIsProcessing(true);
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/${Endpoint}/${idf}`);
      setListDaftarSaya(listdaftarsaya.filter(item => item.idf !== idf));
      Notification('Berhasil Menghapus dari Daftar Kamu', 'success');
    } catch (err) {
      console.error('Error removing item:', err);
      Notification('Gagal Menghapus dari Daftar Kamu', 'error');
    } finally {
      setIsProcessing(false);
    }
};

  return {
    listdaftarsaya,
    loading,
    error,
    isProcessing,
    addDaftarSaya,
    removeDaftarSaya,
  };
};

export default useDaftarSaya;
