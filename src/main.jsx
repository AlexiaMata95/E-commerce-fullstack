import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Catalogo from './routes/catalogo.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormRegister from './routes/RegisterForm.jsx'
import FormLogin from './routes/LoginForm.jsx'
import Profile from './routes/Profile.jsx';
import LoginProvider from './context/LoginContext.jsx';
import UserProvider from './context/UserContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/productList",
    element: <Catalogo/>
  },
  /* {
    path: "/productind",
    element: <Producto/>
  }, */
   {
    path: "/register",
    element: <UserProvider><FormRegister/></UserProvider>
  },
  {
    path: "/login",
    element: <LoginProvider><FormLogin/></LoginProvider>
  },
  
  {
    path: "/profile",
    element: <Profile />
  }/*,
  {
    path: "/checkout",
    element: <Checkout/>
  }
   */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode> 
)
