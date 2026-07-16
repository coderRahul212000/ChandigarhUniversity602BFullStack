
import './App.css'
import { StudentComponent } from './components/StudentComponent'

function App() {
 

  return (
    <>
     <StudentComponent name="Kunal" age={78} course="Nahi Btaunga"/>
     <StudentComponent name="Kunali" age={79} course="Kya pata"> Kuch bhi likhdo</StudentComponent>
    </>
   
  )
}

export default App


