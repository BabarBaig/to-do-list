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

    const addToDo = text => {
        const newToDos = [...toDos, {text:text, isCompleted:false}]
        setToDos(newToDos)      // Refresh list of ToDos
    }

    const removeToDo = index => {   // When an item is clicked, delete it
        let newToDos = [...toDos]
        newToDos.splice(index, 1)   // NOTE: splice mutates IN PLACE!
        setToDos(newToDos)
    }

    return (<>
        {toDos.map((todo, i) =>
            <ToDo index={i} todo={todo} remove={removeToDo} key={i}/>)}
        <ToDoForm addToDo={addToDo}/>
    </>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)