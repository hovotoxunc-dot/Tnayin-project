import { INPUT_TEXT } from "./type"

const initialState = {
    text: ""
}



export const aboutLikesReducer = (state = initialState, action)=>{
    switch (action.type){
        case INPUT_TEXT:
        return{
            ...state,
            text: action.text
        }

        default: 
        return state;
    }
}


