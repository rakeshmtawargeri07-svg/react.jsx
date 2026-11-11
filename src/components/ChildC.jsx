import React from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'


const ChildC=() => { 
// const user=useContext(UserContext);
const {theme,setthem}=useContext(ThemeContext);
functionhandleclick(){
if(theme=='light')
  setthem{'dark'}
else
  setthem{'light'}
}
  return (
    <div>
<button onClick=handleclick></button>
    </div>
  )
}

export default ChildC
