import { useState,useEffect } from "react"

export const StudentInformation = () => {
    const [students, setStudents] = useState([])
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("")

    useEffect(()=>{
       async function fetchStudents(){
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setStudents(data);
        }catch(err){
            setError(err.message);
        }finally{
            setLoader(false);
        }
           
           
        }

        fetchStudents();

    },[])

    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()))

    if(loader){
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>Error: {error}</h2>
    }
  return (
    <div>
        <h1>Student Data Table</h1>
        <input type="text" placeholder="Search by name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <br />
        <br />
        <table border="1"
               cellPadding="10"

               style={{
                borderCollapse:"collapse",
                width:"100%"
               }}

        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                  filteredStudents.length > 0 ?
                    (
                        filteredStudents.map((student) => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.address.city}</td>
                        </tr>
                    )))
                  :  (
                    <tr>
                        <td>No student found</td>
                    </tr>
                  )
                  
                  }
            </tbody>
        </table>
    </div>
  )
}
