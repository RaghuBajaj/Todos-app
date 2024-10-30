import React, { useContext, useState } from 'react'
import './AddNew.css';
import { TodoContext } from '../context';

function AddNew() {
    const {setTodos} = useContext(TodoContext);
    const [items,setItems] = useState({
      todo:"",
      completed: false
    });
    // console.log("items",items);

    const handleChange = (e) => {
        setItems({...items,todo : e.target.value});
    }
    const handleAdd = () => {
      if(items.todo.trim() === ""){
        alert('Please add the content');
        return;
      }
        setTodos((prev)=>[items,...prev]);
        setItems({ todo:"", completed:false });
    }

  return (
    <div className='AddNew'>    
        <input type='text' className='input' placeholder='Add here ...' value={items.todo} onChange={handleChange}/>
        <button className='add_btn' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddNew
