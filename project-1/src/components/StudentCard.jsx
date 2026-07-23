
export const StudentCard = ({student}) => {
  return (
    <div>
        
         <h3><strong>Name:</strong>{student.name}</h3>
        <h3><strong>Age:</strong>{student.age}</h3>
        <h3><strong>Course:</strong>{student.course}</h3>
        <h3><strong>Grade:</strong>{student.grade}</h3>
       
       
    </div>
  )
}
