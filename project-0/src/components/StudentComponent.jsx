

export const StudentComponent = ({name, age, course, children}) => {
  return (
    <div>
        <h1>Student Information</h1>
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Course: </strong>{course}</p>
        {children}
       
    </div>
  )
}



