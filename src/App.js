import { useContext, useEffect } from 'react';
import './App.css';
import AddNew from './components/AddNew';
import List from './components/List';
import { TodoContext } from './context';

function App() {
  const {todos,setTodos} = useContext(TodoContext);
  useEffect(()=>{},[todos,setTodos]);
  return (
    <div className="App">
        <h2 className='head'>Add your todos Here !</h2>
        <AddNew />
        <List />
    </div>
  );
}

export default App;
