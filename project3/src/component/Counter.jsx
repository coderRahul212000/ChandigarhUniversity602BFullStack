import { useState} from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1 style={
            {
                backgroundColor: "Red",
                padding:"12px",
                width: "50vw",
                margin: "auto" 

            }
        }>Counter Application</h1>

        <h2 style={{
            color: count < 0 ?  "red" : "green" 
        }}>{count}</h2>

      <button onClick={()=> setCount(count + 1)} style={{ width : "50vw", height:"12px", backgroundColor: "#1d499b" , margin:"auto"}} >+</button>
      <br />
      <button  onClick={()=> setCount(count - 1)}  style={{ width : "50vw", height:"12px", backgroundColor: "#1d499b" , margin:"auto"}}>-</button>

      <button onClick={()=> setCount(0)} style={{ width : "50vw", height:"12px", backgroundColor: "#9b1d5e" , margin:"auto"}}>Reset</button>
    </div>
  )
}
