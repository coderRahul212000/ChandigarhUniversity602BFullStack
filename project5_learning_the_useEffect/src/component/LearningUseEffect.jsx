import {useState, useEffect} from 'react'
export const LearningUseEffect = () => {
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)
    // useEffect(()=>{
    //    fetch("https://jsonplaceholder.typicode.com/users")
    //    .then(response => response.json())
    //    .then(data => setUsers(data))
    //    .catch((error) => console.log(error))
    // },[])

    useEffect(()=>{
        
        async function getUsers(){
            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data =  await response.json()
            setUsers(data);
            }catch(error){
                console.log(error)
            }finally{
                setLoader(false)
            }
           
            
        }

        getUsers();
       
    },[])

    
  return (
    <>
    {
        loader ?   (<h2>loader...</h2>) : (<div>
       
        <h2>User List</h2>
         {
            users.map(user => (
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div> 
            ))
         }
    </div>) 
    }
    
    </>
    
  )
}
