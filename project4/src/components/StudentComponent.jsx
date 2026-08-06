import React from 'react'
import { useState, useEffect } from 'react'

export const StudentComponent = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("")


    useEffect(()=>{
        async function fetchStudents(){
          
            try {
                  const response =  await fetch("https://jsonplaceholder.typicode.com/users")
            } catch (error) {
                setError(error.message)
            }
        }
        
    },[])
  return (
    <div>
        <h1>Student Data Table</h1>
        <input type="text"  
               placeholder="Search by name"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
              
        />
       <table>
            <thead>
                
            </thead>
       </table>
    </div>
  )
}
