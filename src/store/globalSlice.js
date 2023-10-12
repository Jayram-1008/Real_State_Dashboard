import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    userId: "null",
    name: "null",
    role: "null",
    hiddenColumn: { type: "realState/setHiddenColumn", payload: {} }
};

export const globalSlice = createSlice({
    name: "realState",
    initialState,
    reducers: {
        setLogin: (state, login) => {
            state.login = login;
        },
        setUserId: (state, userId) => {
            state.userId = userId;
        },
        setName: (state, name) => {
            state.name = name;
        },
        setRole: (state, role) => {
            state.role = role;
        },
        setHiddenColumn: (state, column) => {
            state.hiddenColumn = column;
        }
    },
});

export const { setLogin } = globalSlice.actions;
export const { setUserId } = globalSlice.actions;
export const { setName } = globalSlice.actions;
export const { setRole } = globalSlice.actions;
export const { setHiddenColumn } = globalSlice.actions;

export default globalSlice.reducer;