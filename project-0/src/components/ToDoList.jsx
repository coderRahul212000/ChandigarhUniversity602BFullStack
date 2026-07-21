import React, { useState } from 'react'

export const ToDoList = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleAdd =() =>{
        if(todo.trim() === "") return;

        if(editIndex != null){
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = todo;
            setTodos(updatedTodos)
            setEditIndex(null);
        }else{
            setTodos([...todos, todo])
        }
       
        setTodo("")

        
    }

    const handleEdit = (index) =>{
            setTodo(todos[index]);
    }

    const handleDelete = (index) =>{
               const updatedTodos =  todos.filter((item, i) => i !== index) 
               setTodos(updatedTodos)
    }


  return (
    <div>
        <h1>Todo App</h1>
        <div>
            <input type="text" 
            placeholder='Enter todo' 
            value = {todo} 
            onChange={(e) => setTodo(e.target.value)}
            
            />

            <button onClick={handleAdd}>
                {editIndex != null ? "Update" : "Add"}
            </button>


        </div>

        <ul>
            {todos.map((item, index) => (
                <li>
                    {item}
                    <div>
                        <button onClick={()=> handleEdit(index)}>Edit</button>
                        <button onClick={()=> handleDelete(index)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
