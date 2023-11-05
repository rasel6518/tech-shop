import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';

import Apple from './Components/Apple/Apple';
import Huawei from './Components/Huawei/Huawei';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('books.json')
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch('https://brands-prouduct-server.vercel.app/brands')
      },

      {
        path: "/huawei",
        element: <Huawei></Huawei>,
        loader: () => fetch('https://brands-prouduct-server.vercel.app/brands')
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router} />

  </React.StrictMode>,
)
