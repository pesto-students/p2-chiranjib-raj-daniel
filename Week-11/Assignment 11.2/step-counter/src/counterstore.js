import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {counter:0}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    }
})

export const counterActions = counterSlice.actions
const Store = configureStore({reducer:counterSlice.reducer})

export default Store