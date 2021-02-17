

export const initialState={
	basket:["apple",89]
}
 const reducer=(state,action)=>{
	switch(action.type){
		case "BUY_PRODUCT":
		return{
			...state,
			basket:[...action.payload]
		}
		default:
		return state
	}
}

export default reducer;
