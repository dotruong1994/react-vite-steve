
const TodoNew = (props) => {
    const { addNewTodo } = props
    // addNewTodo("Steve Roger");
    const handleClick = () => {
        alert("Clicked!")
    }
    const handleOnchange = (name) => {
        console.log(">>> handle on change", name)
    }
    return (
        <div className='todo-new'>
            <input onChange={(event) => { handleOnchange(event.target.value) }} type="text" />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    );
}

export default TodoNew;