import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {value:true};

export const lightStateSlice = createSlice(
    {
        name:"toggleLights",
        initialState,
        reducers:{changeState:(state,action)=>{
            state.value = action.stateVal
        }}
    }
)
export const {changeState} = lightStateSlice.actions;

const Store = configureStore({reducer:lightStateSlice.reducers})

export default Store
