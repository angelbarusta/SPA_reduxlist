import * as types from '../../../Redux/Types';

const initialState = {
    visibility:false,
    haytask:false,
};

const reducer=(state = initialState, action )=>{
    console.log("Reducer",state)
    switch (action.type){
        case types.VISIBILI:
            return{
                ...state,
                visibility:action.v,
            }
        case types.SELECCIONANDOTEM:
            return{
                ...state,
                haytask:action.v,
            }        
        default:
           return state;
    }
}

export default reducer;