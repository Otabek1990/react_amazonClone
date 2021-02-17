//set up data layer
//Biz buni basketni ichiga joylashimiz kerak
import React, {createContext,useContext,useReducer} from "react";



//THIS IS DATA LAYER:
export	const StateContext = createContext();

//BUILD A PROVIDER:
export const StateProvider=({reducer,initialState,children})=>(
	<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
	)

	export const useContextValue=()=> useContext(StateContext)