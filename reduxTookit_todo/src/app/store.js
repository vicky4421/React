import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

// create and export a store with blank configuration object
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})