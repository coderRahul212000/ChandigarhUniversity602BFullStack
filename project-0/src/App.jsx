
import './App.css'
import { StudentComponent } from './components/StudentComponent'
import { useState } from 'react'

function App() {
   // state
   const [count, setCount] = useState(0);
   const increment = () =>{
      setCount(count + 1);
   }

    const decement = () =>{
      setCount(count - 1);
   }
  
  
 

  return (

    <>
       <h1>React Counter</h1>
       <h2>{count}</h2>
       <button onClick={increment}>+</button>
       <button onClick={decement}>-</button>
       
    </>
   
  )
}

export default App


