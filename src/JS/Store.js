import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/taskSlice';

 const Store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
export default Store