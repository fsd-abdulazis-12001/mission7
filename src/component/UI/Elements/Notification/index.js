import { Bounce, toast } from 'react-toastify';



export const Notification =  (message, type) => {
  console.log(message, type)
    if(type === "error"){
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
    else if (type === "success"){
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
    else if (type === "promise"){
      const resolveAfter1Sec = new Promise(resolve => setTimeout(resolve, 1000));
      toast.promise(
          resolveAfter1Sec,
          {
         
            pending: 'Tunggu sebentar...',
            success:  `${message} 👌`,
            error: 'Promise rejected 🤯',
            theme: "colored",
          },
          {
            position: "top-center",
            autoClose: 2000,
          }
      )
    }
  
     
}


 
