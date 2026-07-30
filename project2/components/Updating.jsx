import React, { useState,useEffect } from 'react'

export const Updating = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("component updated: ", count , "times");
        
    })
  return (
    <>
            <div>Count: {count}</div>
            <button onClick={()=>setCount(count+1)}>+</button>
    </>
   
  )
}
