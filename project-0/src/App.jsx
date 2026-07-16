
import './App.css'
import { StudentComponent } from './components/StudentComponent'

function App() {
   
  let studentInformation = [
    {
      name: "Transformer1",
      age: 1006,
      course: "Transform"
    },
    {
      name: "Transformer2",
      age: 1007,
      course: "Btech"
    },
    {
      name: "Transformer3",
      age: 1008,
      course: "Btech Civil"
    },
    {name: "Transformer4",
      age: 1009,
      course: "Btech Mechanical"},
    {name: "Transformer5",
      age: 1010,
      course: "Btech Ai "},
    {name: "Transformer6",
      age: 1011,
      course: "Btech Printing "},
      {name: "Transformer7",
      age: 1011,
      course: "Btech Printing "}
  ]

  return (
    <>
      
       {studentInformation.map(transformer => (
        <StudentComponent 
          name={transformer.name}
          age = {transformer.age}
          course = {transformer.course}
          
          />
       ))}
    </>
   
  )
}

export default App


