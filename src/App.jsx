import './components/todo/todo.css'
import TodoData from './components/todo/tododata'
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg'

const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">To-do List</div>
      <TodoNew />
      <TodoData />
      <img className='logo' src={reactLogo} alt="" />
    </div>
  )
}

export default App
