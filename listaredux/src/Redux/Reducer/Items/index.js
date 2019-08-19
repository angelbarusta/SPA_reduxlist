import * as types from '../../Types';

const initialState = {
    nav:false,
     si:true,
     no:false,
     activeItem:{}, 
     dashPets:'item',
};

const reducer=(state = initialState, action )=>{
    console.log("Reducer",state)
    switch (action.type){
        case types.DASHPETS:
            return{
                ...state,
                dashPets:action.p,
            }        
        default:
           return state;
    }
}

export default reducer;