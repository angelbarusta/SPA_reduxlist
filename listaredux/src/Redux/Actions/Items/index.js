import * as types from '../../Types';


export const visibilidad=(v)=>{
    return{
        type:types.VISIBILI,
        v,
    };
};
export const selectItem=(v)=>{
    return{
        type:types.SELECCIONANDOTEM,
        v,
    };
};