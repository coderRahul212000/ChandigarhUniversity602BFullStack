import React from 'react'

export const Sidebar = () => {
  return (
    <div style={{
        width:"200px",
        backgroundColor: "#ef2f7c",
        color:"white",
        height:"450px"
    }}>
        <h3>Menu</h3>
        <ul>
            <li>Home</li>
            <li>Students</li>
            <li>Courses</li>
            <li>Settings</li>
        </ul>
    </div>
  )
}
