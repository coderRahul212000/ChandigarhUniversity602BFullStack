import React,{useState,useEffect} from 'react'

function Timer(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Timer Started")
        const timer = setInterval(()=>{
            setCount((prev) => prev + 1)
        }, 1000)

        return ()=>{
            clearInterval(timer);
            console.log("Timer cleared")
        }
        
    },[])

    return <h2>Seconds : {count} </h2>

}

export const Unmounting = () => {
    
  const [show, setShow] = useState(true);
    
  return (
    <>
     <div>
       <button onClick={()=> setShow(!show)}>{show ? "Hide Timer" : "Show Timer"}</button>
    </div>

    <br />
    <br/>
    {show && <Timer/>}
    </>
   
  )
}
