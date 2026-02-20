import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello from react router</div>
  },
  {
    path: "about",
    element: <div>Know about me</div>
  },
  {
    path: "blogs",
    element: <div>Write blogs about what you want</div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
