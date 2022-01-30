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
    const [value, setValue] = React.useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        const newToDos = [...toDos, {text:value, isCompleted:false}]
        setToDos(newToDos)
        setValue('')
    }
    const removeToDo = e => {   // when user clicks on an item, delete it
        const index = Number(e.target.id)
        let temp = [...toDos]
        temp.splice(index, 1)
        setToDos(temp)
    }
    return (<>
        {toDos.map((todo, i) =>
            <div className="todo" key={i} id={i} onClick={removeToDo}>{todo.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value}
                placeholder="Add TodDo ..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    </>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)