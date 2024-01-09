import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatDetails:null,
        openChat:null
    },
    reducers: {
        addChat: (state, action) => {
            state.chatDetails=action.payload;
        },
        getChat: (state, action) => {
            state.openChat=action.payload;
        }
    }
})
export const { addChat, getChat } = chatSlice.actions;
export default chatSlice.reducer;