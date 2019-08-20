import * as types from '../../../Redux/Types';

import moment from 'moment';

const initialState = {
    visibility:false,
    haytask:false, 
    idElemento:1,
    nombreTask:'Titulo de la tarea...',
    descripTask:'Descripcion de la tarea...',
    fechTask: moment(new Date()).format('DD/MM/YYYY'),
    autorTask:'Nombre del autor...',
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
        case types.NOMBRETASK:
            return{
                ...state,
                nombreTask:action.nom,
            }
        case types.DESC:
            return{
                ...state,
                descripTask:action.desc,
            }
        case types.FECH:
            return{
                ...state,
                fechTask:action.fech,
            }       
        case types.AUTOR:
            return{
                ...state,
                autorTask:action.autor,
            }                  
        default:
           return state;
    }
}

export default reducer;