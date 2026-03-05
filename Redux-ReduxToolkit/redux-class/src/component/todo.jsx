import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todo"
import { updateTodo } from "../features/todo/todo"
import { markAsDone } from "../features/todo/todo"



export default function Todo() {
    const todos = useSelector((state) => state.todos.todos)
    console.log(todos)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginBottom: '10px' }}>
                        <p style={{ display: 'inline-block', marginRight: '10px', textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.text}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: '10px' }}>Delete</button>
                        <button onClick={() => {
                            const newText = prompt("Update your task:", todo.text);
                            if (newText) dispatch(updateTodo({ id: todo.id, text: newText }));
                        }} style={{ marginLeft: '10px' }}>Update</button>
                        <button onClick={() => dispatch(markAsDone(todo.id))} style={{ marginLeft: '10px' }}>
                            {todo.isDone ? "Undo" : "Mark as Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}