import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./usersSlice"
import chatsReducer from "./chatsSlicer"


export const store = configureStore({
    reducer: {
        users: usersReducer,
        chats: chatsReducer
    }
})