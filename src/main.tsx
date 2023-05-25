import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Pokedex from './routes/Pokedex.tsx'
import Legendaries from './routes/Legendaries.tsx'
import Documentation from './routes/Documentation.tsx'

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
      },
      {
        path: "/legendaries",
        element: <Legendaries/>
      },
      {
        path: "/Documentation",
        element: <Documentation/>
      },
      {
        path: "*", // Rota curinga para corresponder a qualquer caminho
        element: <NotFound /> // Componente para exibir a página de erro 404
      }
    ]
  }
])   /*objeto de config de roteameno, passado qual é o elemento principal que vai abrigar todas as páginas*/ 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
