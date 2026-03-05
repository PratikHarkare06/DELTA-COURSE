import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now().toString(),
                text: action.payload,
                isDone: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, markAsDone } = todoSlice.actions

export default todoSlice.reducer
