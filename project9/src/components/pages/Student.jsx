import {Link} from "react-router-dom"
import students from "../../data/students"



export const Student = () => {
  return (
    <div>
        <h1>Student Directory</h1>
        {
        students.map((student) => (
            <div>
                <Link to={`/students/${student.id}`}>
                   {student.name}
                </Link>
            </div>
        )) 
        }

    </div>
  )
}

