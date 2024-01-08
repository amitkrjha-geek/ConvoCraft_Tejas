import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
import messageReducer from "./messageSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
        message:messageReducer
    }
})

export default store;