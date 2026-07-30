
import { useState } from 'react'

export const Form = () => {
  
  
    const[formData, setFormData]= useState({
        name:"",
        email:"",
        course:"",
        age:""
    })
     const [submittedData, setSubmittedData] = useState(null);

     function handleSubmit(event){
        event.preventDefault();
        setSubmittedData(formData);
     }
     
     function handleChange(event){
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
     }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' value={formData.name} onChange={handleChange} name='name'/>
            <br />
            <input type="email" placeholder='Enter Email' value={formData.email} onChange={handleChange} name='email'/>
            <br />
            <input type="text" placeholder='course' value={formData.course} onChange={handleChange} name='course'/>
            <br />
            <input type="number" placeholder='age' value={formData.age} onChange={handleChange} name='age'/>
            <br />
            <button type='submit'>Register</button>
        </form>

        {
            submittedData && (
                <div> 
                    <h2>Submitted Data</h2>
                     <p>Name: {submittedData.name}</p>
                     <p>email: {submittedData.email}</p>
                     <p>course: {submittedData.course}</p>
                     <p>age: {submittedData.age}</p>
                </div>
            )
        }
    </div>
  )
}
