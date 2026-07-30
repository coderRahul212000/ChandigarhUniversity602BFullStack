// Mounting

import { useEffect } from "react"

export const Mounting = () => {
  useEffect(()=>{
    console.log("Component Mounted");
    
  },[])
  return (
    <div>Hello Mounting</div>
  )
}
