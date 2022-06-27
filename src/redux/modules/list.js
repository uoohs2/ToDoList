import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    loading: false,
    todoList: [],
    error: null,
  },
  reducers: {
    // ToDo 추가
    addReducer: (state, action) => {
      state.todoList.unshift(action.payload);
    },

    // ToDo 수정
    editReducer: (state, action) => {
      state.todoList[action.payload.index] = action.payload.text;
    },

    // ToDo 삭제
    deleteReducer: (state, action) => {
      state.todoList = state.todoList.filter(
        (v) => v !== state.todoList[action.payload]
      );
    },
  },
});

export const { addReducer, editReducer, deleteReducer } = listSlice.actions;

export default listSlice;
