function App() {
    const [todos, setToDos] = React.useState([
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
    return (<>
        {todos.map((todo, i) =>
            <div className="todo" key={i}>{todo.text}</div>)}
    </>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)