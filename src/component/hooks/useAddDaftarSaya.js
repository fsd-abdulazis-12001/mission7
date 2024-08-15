import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Notification } from "../UI/Elements/Notification";

const useAddDaftarSaya = (endpoint) => {

  const mutation = useMutation({
    mutationFn: async( {idf, image, neweps, top10, title} ) => {
      const response = await axiosInstance.post(`/${endpoint}`, {
        idf,
        image,
        neweps,
        top10,
        title,
      });
      return response.data;
    },
   
  });

  const addDaftarSaya = (idf, image, neweps, top10, title) => {
    const mutationPromise = mutation.mutateAsync({ idf, image, neweps, top10, title });
      
    Notification("Item added successfully", "promise", mutationPromise);
  };

  return {
    addDaftarSaya
  };
};

export default useAddDaftarSaya;
