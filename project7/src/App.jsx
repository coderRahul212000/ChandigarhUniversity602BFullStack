import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Home } from "./components/Home"
import { NotFound } from "./components/NotFound"
import { User } from "./components/User"
import { Navbar } from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
 
function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
       
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/:id" element={<User/>}/>
     
       <Route path="*" element={<NotFound/>}/>
    
   
   </Routes>
    
    </>
  )
}

export default App
