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
        },
        deleteChat: (state, action) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload)
            saveChats(state.chats)
        },
        editChat: (state, action) => {
            // find the chat to edit
            let chatToEdit = state.chats.find(chat => {
                 return chat.id === action.payload.id
            })
            // object destructuring  chat object
            // eslint-disable-next-line 
            const { message, id, name, timeStamp }  = chatToEdit
            
            // change the message payload
            const edittedChat = { message: action.payload.message, id: id, name: name, timeStamp: timeStamp}

            // find index of the change object
            let idx = state.chats.findIndex(chat => chat.id === action.payload.id)

            // update
            if (idx >=0 ) {
                state.chats[idx] = edittedChat
            }

            saveChats(state.chats)
        }
    }
})

export const { sendChat, loadChats, deleteChat, editChat } = chatsSlice.actions

export default chatsSlice.reducer