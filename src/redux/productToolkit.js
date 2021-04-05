import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
	basket:[],
  productInfos:[]

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
    addToProductInfos:(state,action)=>{
      state.productInfos.push(action.payload)
    }
    }
})

export const { add, take,addToProductInfos } = counterSlice.actions
export default counterSlice.reducer