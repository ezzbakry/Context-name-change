import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Home from './pages/Home/Home'
import { Nameprovider } from './context/name';




function App() {
  const routes = createBrowserRouter([{
    path: "/", element: <Applayout></Applayout>, children: [
      { index: true, element: <Home /> }]
  }])
  const [name, setname] = useState("Ezz")

  return (
    <>
      <Nameprovider value={{ name, setname }}>
       
          <RouterProvider router={routes}>
          </RouterProvider>
        
      </Nameprovider>
    </>
  )
}

export default App
