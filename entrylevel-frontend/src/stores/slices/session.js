import { createSlice } from '@reduxjs/toolkit';

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    query: {}
  },
  reducers: {
    replaceSessions(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    replaceQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const sessionsActions = sessionsSlice.actions;

export default sessionsSlice;
