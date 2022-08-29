import { createSlice } from "@reduxjs/toolkit";
import { saveChats, fetchChats } from "../lib/storage"


const initialState = {
    // chats: []
    chats: fetchChats()
}

const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        sendChat: (state, action) => {
            state.chats = [action.payload, ...state.chats]
            saveChats(state.chats)
        },
        loadChats: (state, action) => {
            state.chats = fetchChats()
        }
    }
})

export const { sendChat, loadChats } = chatsSlice.actions

export default chatsSlice.reducer