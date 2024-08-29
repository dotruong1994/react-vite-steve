
const TodoData = (props) => {
    const { user, age, data } = props;
    console.log(">>> Check", props)
    return (
        <div className='todo-data'>
            <div>Hello {user}, I love {age}, Im live in {data.address}, Im from {data.country}</div>
            <div>Learning React</div>
            <div>Watch youtube</div>
            <div>
                {JSON.stringify(props.ToDoLists)}
            </div>
        </div>
    );
}

export default TodoData;