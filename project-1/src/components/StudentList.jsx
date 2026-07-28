import React from 'react'
import { StudentCard } from './StudentCard'

export const StudentList = ({students}) => {
  return (
    <div style={{
        padding: "20px",
        flex : "1",
        backgroundColor: "whitesmoke",
        margin: "2px"
    }}>
        <h2>Student Records</h2>
       {
            students.map((student) => (
                        <StudentCard
                          student = {student}
                        />
            ))
       }
        
    </div>
  )
}
