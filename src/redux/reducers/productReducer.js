import { ActionTypes } from "../constants/actions-types"

const initialState={
    products:[
        {
        id:1,
        title:"Ali",
        category:"IT_Specialist"
        },
    ], 
}

export const ProductReducer=(state,{type,payload})=>{

    switch(type){

        case ActionTypes.SET_PRODUCTS:
            return state; 


    }
}