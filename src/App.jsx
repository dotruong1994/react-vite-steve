import './components/todo/todo.css'
import TodoData from './components/todo/tododata'
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const userName = "Steve Roger";
  const age = 30;
  const data = {
    address: "Dong Nai",
    country: "Viet Nam"
  };
  const [ToDoLists, setToDoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watch youtube" }
  ]);

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  }
  // addNewTodo();
  return (
    <div className="todo-container">
      <div className="todo-title">To-do List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        user={userName}
        age={age}
        data={data}
        ToDoLists={ToDoLists}
      />
      <img className='logo' src={reactLogo} alt="" />
    </div>
  )
}

export default App
