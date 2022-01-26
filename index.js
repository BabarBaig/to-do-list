function App() {
    const [toDos, setToDos] = React.useState([
        {   text: 'learn react',
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
    return (<>
        {toDos.map((todo, i) =>
            <div className="todo" key={i}>{todo.text}</div>)}
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