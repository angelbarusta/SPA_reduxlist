import * as types from '../../../Redux/Types';

const initialState = {
    visibility:false,
    haytask:false, 
    idElemento:1,
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
        case types.IDENTIFI:
            return{
                ...state,
                idElemento:action.idkey,
            }         
        default:
           return state;
    }
}

export default reducer;