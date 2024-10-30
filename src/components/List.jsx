import React, { useEffect } from 'react'
import './List.css';
import { useContext } from 'react';
import { TodoContext } from '../context';
import Item from './Item';

function List() {
  const {todos,setTodos} = useContext(TodoContext);
  useEffect(()=>{},[todos,setTodos]);
  return (
    <div className='list'>
        {todos.map((item,index)=>{
            return(
                <div key={index} className='list_item'>
                    <Item item={item} index={index} />
                </div>
            )
        })}
    </div>
  )
}

export default List
