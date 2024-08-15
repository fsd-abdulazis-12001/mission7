import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Notification } from "../UI/Elements/Notification";

const useDeleteDaftarSaya = (endpoint) => {
  const mutation = useMutation({
    mutationFn: async (idf) => {
      const response = await axiosInstance.delete(`/${endpoint}/${idf}`);
      return response.data;
    },
  });

  const deleteDaftarSaya = (idf) => {
    const mutationPromise = mutation.mutateAsync(idf);

    Notification("Item deleted successfully", "promise", mutationPromise);
  };

  return {
    deleteDaftarSaya,
  };
};

export default useDeleteDaftarSaya;
