import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
};

const Authslice = createSlice({
    name: "auth",
    initialState,
    
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData; // Accessing userData directly
        },
        logout: (state) => {
            state.status = false;
            state.userData = null; // Resetting userData to null
        },
    },
});

export const { login, logout } = Authslice.actions;

export default Authslice.reducer;
