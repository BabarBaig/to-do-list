function ToDo({index, todo, remove}) {
    const handle = () => { remove(index)}
    return <div className="todo" onClick={handle}>(-) {todo.text}</div>
}