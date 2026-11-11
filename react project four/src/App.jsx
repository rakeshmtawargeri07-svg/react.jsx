import React, { useState } from 'react'
import Card from './components/Card'
function App() {
  const [count,setcount]=useState(0);

  function Handleclick(){
    setcount(count++);
  }
  return (
    <div>

      <Button clickcount={Handleclick}>
        <h1>{count}</h1>

      </Button>
      {/*<Card name="rakesh">
        <h2>best me</h2>
      <p>do the best untill u hit peak </p>
      </Card>
      <Card child="iam a baby">
        <B>i will previal my sellf</B> //insted of <B> if it was absent insted of it the child inside child gets exected in props.childreen
      </Card> */}
    </div>
  )
}

export default App
