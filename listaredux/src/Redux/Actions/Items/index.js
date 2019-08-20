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
export const identifi=(idkey)=>{
    return{
        type:types.IDENTIFI,
        idkey,
    };
};
export const nombreTarea=(nom)=>{
    return{
        type:types.NOMBRETASK,
        nom,
    }
}
export const descTarea=(desc)=>{
    return{
        type:types.DESC,
        desc,
    }
}