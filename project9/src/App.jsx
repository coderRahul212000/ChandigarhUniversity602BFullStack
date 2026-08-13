import{ AddStudent} from "./components/pages/AddStudent"
import{ Student} from "./components/pages/Student"
import { StudentDetails } from "./components/pages/StudentDetails"
import {Routes, Route} from "react-router-dom"
import { Navbar } from "./components/pages/Navbar"
function App() {
  

  return (

    <>
    <Navbar/>
    <Routes>
      <Route path="/students" element={<Student/>}/>
      <Route path="/students/:id" element={<StudentDetails/>}/>
      <Route path="/add" element={<AddStudent/>}/>
    </Routes>
    
    </>
  )
}

export default App
