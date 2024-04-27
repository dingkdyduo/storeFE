import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
let  appReducers ={ reducer: {
  auth: authReducer
}}
let state={
  isAuthenticated: false,
  user: null,
};

const store = createStore(appReducers, state);

 
export default store