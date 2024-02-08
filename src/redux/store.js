import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/authSlice";
import userReducer from "@/redux/slice/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
