import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link style={{marginRight:"20px"}} to="/students">Students</Link>
        <Link to="/add">Add Student</Link>
    </nav>
  )
}
