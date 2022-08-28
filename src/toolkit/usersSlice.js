import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name : "marvin", id: "1.2"},
    isLoggedIn: false
}


export const usersSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {
        signInUser: (state, action) => {
            state.isLoggedIn = !state.isLoggedIn
            state.user.name = action.payload.name
            state.user.id = action.payload.id

        },
        signOut: (state) => {
            state.user.name = ""
            state.user.id = ""
            state.isLoggedIn = !state.isLoggedIn
        }
     }
 })

 export const {signInUser, signOut} = usersSlice.actions
 
 export default usersSlice.reducer