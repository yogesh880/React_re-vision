import { useState } from 'react'
import './App.css'

function App() {
//  let Counter=15
const[Counter,setCounter]=useState(15);
const AddCounter=()=>{
  // Counter++;
  /*setCounter(Counter+1);  //batching concept in react,will compare and check,find same ,will consider on operation
  setCounter(Counter+1);
  setCounter(Counter+1);  */
  // to handle this we have callback function-offered in state.
  setCounter((prev)=>prev+1);
  setCounter((prev)=>prev+1);
  setCounter((prev)=>prev+1);
  // console.log(Counter);
}
const RemoveCounter=()=>{
  // Counter--;
  setCounter(Counter-1);
  // console.log(Counter);
}
  return (
    <>
      <h1>let's started with state. </h1>
      <h2>Counter Value : {Counter}</h2>
      <button onClick={AddCounter}>AddCounter</button>{" "}
      <button onClick={RemoveCounter}>RemoveCounter</button>
    </>
  )
}

export default App
