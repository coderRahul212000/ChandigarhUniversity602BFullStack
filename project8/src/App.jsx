import { Navbar } from './components/Navbar'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Home } from './components/Pages/Home'
import { About } from './components/Pages/About'
import { Contact } from './components/Pages/Contact'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </>
  )
}

export default App
