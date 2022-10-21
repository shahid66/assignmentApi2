import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice=createSlice({
    name:'settings',
    initialState:{
        loader:"d-none"
    },
    reducers:{
        Showloader:(state)=>{
            state.loader=" "
        },
        Hideloader:(state)=>{
            state.loader="d-none"
        }
    }
})

export const {Showloader,Hideloader}=settingsSlice.actions;
export default settingsSlice.reducer;