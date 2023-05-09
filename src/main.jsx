import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/User.jsx';
import Layout from './components/layout.jsx';
import Update from './components/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element:<App></App>
      },
      {
        path:"/users",
        element: <User></User>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path:"/update/:id",
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)