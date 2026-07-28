import { useEffect, useState } from "react"


export const LearningUseEffect = () => {
    let [count, setCount] = useState(0);
    let [titlecount, setTitleCount] = useState(0)
    useEffect(()=>{
        console.log("Component rendered");
    },[])
  return (
    <>
            <h1> Heading of {titlecount}</h1>
            <button onClick={() => setTitleCount(titlecount + 1)}>{titlecount}</button>
            <div>{count}</div>
            <button onClick={()=> setCount(count + 1)}>Number of time i clicked on button {count}</button>
    </>
    
  )
}
