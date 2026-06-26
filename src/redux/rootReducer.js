// import { combineReducers } from "redux";

import { combineReducers } from "redux";
import { aboutLikesReducer } from "./about/reducer";

// const rootReducer = combineReducers({

// })

// export default rootReducer;



const rootReducer = combineReducers({
    text: aboutLikesReducer,
})

export default rootReducer