import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice.js';

// The store combines slices. More slices can be added as the app grows.
export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});
