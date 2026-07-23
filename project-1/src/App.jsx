import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StudentList } from './components/StudentList'

function App() {
  const students = [
    {
      id: 1, name : "Arshpreet Singh", age: 20 , course: "Computer Science and Engineering", grade: "A"
    },
    {
       id: 2, name : "Rahul Singh", age: 100 , course: "Computer Science and Engineering", grade: "F"
    },
    {
       id: 3, name : "Kunal Dhaliwal", age: 21 , course: "B Pharma", grade: "O+"
    },
    {
       id: 4, name : "Kirandeep Kaur", age: 19 , course: "Bcom", grade: "D"
    },
    {
       id: 5, name : "Vanshika Binani", age: 20 , course: "Computer Science and Engineering", grade: "A"
    },
    {
       id: 6, name : "Ronak", age: 22 , course: "Computer Science and Engineering", grade: "B"
    },

  ]

  return (
    <> 
        <Header/>
    <div style={{display:"flex"}}>
      
      <Sidebar/>
      <StudentList students = {students}/>
      
    </div>
    <Footer/>
    </>
  
  )
}



   

export default App
