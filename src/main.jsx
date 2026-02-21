import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Mobiles from './component/mobiles/Mobiles.jsx';
import Laptop from './component/laptop/Laptop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptop', Component: Laptop},
    ]
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "about",
    element: <div>Know about me</div>
  },
  {
    path: "blogs",
    element: <div>Write blogs about what you want</div>
  },
  {
    path: "app",
    element: <App></App>
  },
  {
    path: "app2",
    Component: App
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
