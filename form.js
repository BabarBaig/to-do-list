function ToDoForm({addToDo}) {
    const [value, setValue] = React.useState('')    // managed variable

    const handleSubmit = e => {
        e.preventDefault();     // prevent default behavior of loading page
        if (!value)     return
        addToDo(value)
        setValue('')            // clear input field, get it ready for next ToDo
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Add ToDo Item ..."
                onChange={e => setValue(e.target.value)}/>
        </form>
    )
}