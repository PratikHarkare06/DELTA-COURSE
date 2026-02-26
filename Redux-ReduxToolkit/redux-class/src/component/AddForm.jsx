import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todo";


export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Todo" value={task} onChange={(e) => setTask(e.target.value)} />
                <button>Add Todo</button>
            </form>
        </>
    )
}