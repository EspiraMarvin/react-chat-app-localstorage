import { createSlice } from "@reduxjs/toolkit";
import { saveChats, fetchChats } from "../lib/storage"


const initialState = {
    // chats: []
    chats: fetchChats()
}

console.log('initialState', initialState.chats)

const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        sendChat: (state, action) => {
            state.chats = [action.payload, ...state.chats]
            saveChats(state.chats)
            fetchChats()
        },
        loadChats: (state, action) => {
            return{
                ...state, 
                chat: action.payload
            } 
        }
    }
})

export const { sendChat, loadChats } = chatsSlice.actions

export default chatsSlice.reducer