import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Pokedex from './routes/Pokedex.tsx'

//páginas


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
      path: "/"   , 
      element: <Home />
      },
      {
        path: "/pokedex",
        element: <Pokedex/>
      }
    ]
  }
])   /*objeto de config de roteameno, passado qual é o elemento principal que vai abrigar todas as páginas*/ 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
