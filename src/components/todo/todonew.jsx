import { useState } from 'react';

const TodoNew = (props) => {
    const { addNewTodo } = props
    // addNewTodo("Steve Roger");
    const [valueInput, setValueInput] = useState("Steve roger")
    const handleClick = () => {
        console.log(">>>check value input", valueInput)
    }
    const handleOnchange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input onChange={(event) => { handleOnchange(event.target.value) }} type="text" />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
            <div>My input is: {valueInput}</div>
        </div>
    );
}

export default TodoNew;