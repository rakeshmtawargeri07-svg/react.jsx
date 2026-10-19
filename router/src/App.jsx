
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/HomePage.jsx";
import About from './components/About';
import Dashboard from "./components/Dashboard";
import HomePage from './components/HomePage.jsx';
import Navbar from './components/Navbar.jsx';

const router=createBrowserRouter([
  {
    path:"/",
  element:
  <div>
    <Navbar/>
    <HomePage/>
  </div>
  },
  {
    path:"/about",
    element:<div>
    <Navbar/>
    <About/>
  </div>
  },
  {
    path:"/dashboard",
    element:<div>
    <Navbar/>
    <Dashboard/>
  </div>
  },
]
);

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
