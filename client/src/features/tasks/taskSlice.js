import { createSlice } from '@reduxjs/toolkit';

// The initial state keeps a list of tasks and UI flags for loading/errors.
const initialState = {
  items: [],
  status: 'idle',
  error: null
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    setLoading: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    updateTask: (state, action) => {
      const updated = action.payload;
      const index = state.items.findIndex((task) => task.id === updated.id);
      if (index !== -1) {
        state.items[index] = updated;
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    }
  }
});

export const { setTasks, setLoading, setError, addTask, updateTask, deleteTask } = tasksSlice.actions;

// Export the reducer to be added to the store.
export default tasksSlice.reducer;
