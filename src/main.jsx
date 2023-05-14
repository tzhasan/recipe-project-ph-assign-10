import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/MainRoute/Routes'
import AuthProvider from './Auth-Provider/AuthProvider'
import ContextProvider from './Auth-Provider/ContextProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </ContextProvider>
);
