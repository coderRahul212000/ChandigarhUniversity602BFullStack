import React from 'react'
import {useParams} from "react-router-dom"
import students from '../../data/students';

export const StudentDetails = () => {
    const {id} = useParams();
     const student = students.find((s) => s.id == parseInt(id))

     if(!student){
        return <h2> Student Not Found</h2>
     }

     return (
        <div>
            <h2>Student Profile</h2>
            <p><strong>Name:</strong>{student.name}</p>
            <p><strong>Course: </strong> {student.course}</p>
            <p><strong>Age:</strong> {student.age}</p>
        </div>
     )

  
}
