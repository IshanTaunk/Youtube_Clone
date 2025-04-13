import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        cache:{}
    },
    reducers:{
        searchCache: (state,action)=>{
            console.log(state.cache,'lll',action.payload)
            state.cache = {...state.cache,...action.payload}
        }
    }
});

export const {searchCache} = searchSlice.actions;
export default searchSlice.reducer;