import  { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"));
        setTodos(todos);
    },[]);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

    const value={
        todos,setTodos
    }

    return(
        <TodoContext.Provider value={value}>
        {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;