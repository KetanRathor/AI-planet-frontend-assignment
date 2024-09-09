// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from "../Slices/challengeSlice"

export const store = configureStore({
  reducer: {
    challenge: challengeReducer,
  },
});
