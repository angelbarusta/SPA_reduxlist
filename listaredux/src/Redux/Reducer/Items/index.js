import * as types from '../../../Redux/Types';

const initialState = {
    visibility:false,
};

const reducer=(state = initialState, action )=>{
    console.log("Reducer",state)
    switch (action.type){
        case types.VISIBILI:
            return{
                ...state,
                visibility:action.v,
            }        
        default:
           return state;
    }
}

export default reducer;