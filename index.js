function App() {
    const [toDos, setToDos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {   text: 'Meet friend for lunch',
            isCompleted: false
        },
        {   text: 'build todo app',
            isCompleted: false
        }
    ])
    const [value, setValue] = React.useState('')    // managed variable
    const handleSubmit = e => {
        e.preventDefault();     // prevent default behavior of loading page
        if (!value)     return
        const newToDos = [...toDos, {text:value, isCompleted:false}]
        setToDos(newToDos)      // Refresh list of ToDos
        setValue('')            // clear input field, get it ready for next ToDo
    }
    const removeToDo = e => {   // When an item is clicked, delete it
        const i = Number(e.target.id)
        let newToDos = [...toDos]
        newToDos.splice(i, 1)   // NOTE: splice mutates IN PLACE!
        setToDos(newToDos)
    }
    return (<>
        {toDos.map((todo, i) =>
            <div className="todo" key={i} id={i} onClick={removeToDo}>{todo.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Add TodDo ..."
                onChange={e => setValue(e.target.value)}/>
        </form>
    </>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)