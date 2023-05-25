import './global.css'


import { Outlet } from "react-router-dom"
import NavBar from './components/navbar/navbar';

function App() {
 

  return (
    <>
      <NavBar/>
      <div className="main">
        <Outlet />
      </div>
    </>
  )
}

export default App
