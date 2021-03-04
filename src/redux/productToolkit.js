import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
	basket:[]

 }

const counterSlice = createSlice({
  name: 'basketProduct',
  initialState,
  reducers: {
    add:(state,action)=>{
      state.basket.push(action.payload)
    },
    take(state,action) {
      state.basket.splice(0,action.payload)
    },
    },
})

export const { add, take } = counterSlice.actions
export default counterSlice.reducer