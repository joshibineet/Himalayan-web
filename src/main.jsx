import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from "./pages/Home/Home";
import About_us from "./pages/About_us/About_us";
import Contact_us from "./pages/Contact_us/Contact_us";
import Travel from "./pages/Travel/Travel";


const myRouter =createBrowserRouter([
  {
    path: '/',
    element:<Rootlayout />,
    children: [
      {
       path: "/",
       element: <Home />,
      },
      {
       path: "/about_us",
       element: <About_us />,
      },
      {
       path: "/contact_us",
       element: <Contact_us />,
      },
      {
       path: "/travel",
       element: <Travel />,
      },
     ]
   
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={myRouter} />
    <App />
  </React.StrictMode>,
)
