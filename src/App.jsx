 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import BerandaPage from "./pages/beranda"
import DaftarSaya from "./pages/beranda/DaftarSaya";
import Series from "./pages/beranda/Series";
import Films from "./pages/beranda/Films";
import Profile from "./pages/auth/Profile";
import Langganan from "./pages/langganan";
import Payment from "./pages/payment";
import VideoPlayer from "./pages/videoplayer";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BerandaPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  }
  ,
  {
    path: "/daftarsaya",
    element: <DaftarSaya/>,
  }
  ,
  {
    path: "/series",
    element: <Series/>,
  }
  ,
  {
    path: "/films",
    element: <Films/>,
  }
  ,
  {
    path: "/profile",
    element: <Profile/>,
  }
  ,
  {
    path: "/subscribe",
    element: <Langganan/>,
  }
  ,
  {
    path: "/payment/:id",
    element: <Payment/>,
  },
  {
    path: "/videoplayer",
    element: <VideoPlayer/>,
  }
]);
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
