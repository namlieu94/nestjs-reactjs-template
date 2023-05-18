import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui';
import sessionsSlice from './slices/session';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, sessions: sessionsSlice.reducer },
});

export default store;
