import { createSlice, nanoid } from '@reduxjs/toolkit'

// Define initial state for slice
const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
}

// create slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// export actions
export const { addTodo, removeTodo } = todoSlice.actions

// export combined single reducer function
export default todoSlice.reducer