import { createContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildA from './components/ChildA';
import { useContext } from 'react'

//step1:usercontext syntax
// const UserContext=createContext();
//step2:write component thorugh which we want to share datain provider
//step3:pass name value through usestate
//step4:take value in consumer

const ThemeContext=createContext();
function App() {
  
// const[user,setUser]=useState({name:"Rakesh"})
const [theme,setthem]=useState('light')
  return (
  
  <ThemeContext.Provider value=({theme,setthem})>
    <div id='container' style={backgroundcolor:theme=='light' ? "beige":"black"}>
      <ChildA/></div>
      </ThemeContext.Provider>
//   <>
//   <UserContext.Provider value={user}><ChildA></ChildA></UserContext.Provider>
//   </>
)
}

export default App
// export {UserContext }
export{ThemeContext}
