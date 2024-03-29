import * as types from "../../../Redux/Types";

import moment from "moment";
import { ItemTask } from "../../../Components/ListItem/item.json";

const initialState = {
  visibility: false,
  haytask: false,
  idElemento: 0,
  cantidadElem: 0,
  numElem: 0,
  idArr: 0,
  idArrElem: 0,
  nombreTask: "Titulo de la tarea...",
  descripTask: "Descripcion de la tarea...",
  fechTask: moment(new Date()).format("DD/MM/YYYY"),
  tim: moment(new Date()).format("hh:mm:ss"),
  autorTask: "Nombre del autor...",
  notiOK: false,
  notiDEL: false,

  elements: []
};

const reducer = (state = initialState, action) => {
  console.log("Reducer", state);
  switch (action.type) {
    case types.VISIBILI:
      return {
        ...state,
        visibility: action.v,
        notiOK: false,
        notiDEL: false
      };
    case types.SELECCIONANDOTEM:
      return {
        ...state,
        haytask: action.v,
        idArrElem: state.idElemento - 1,
        notiOK: false
      };
    case types.IDENTIFI:
      return {
        ...state,
        idElemento: action.idkey
      };
    case types.NOMBRETASK:
      return {
        ...state,
        nombreTask: action.nom
      };
    case types.DESC:
      return {
        ...state,
        descripTask: action.desc
      };
    case types.FECH:
      return {
        ...state,
        fechTask: action.fech
      };
    case types.AUTOR:
      return {
        ...state,
        autorTask: action.autor
      };
    case types.ADDID:
      return {
        ...state,
        cantidadElem: state.cantidadElem + 1,
        idArr: state.cantidadElem,
        notiOK: true
      };
    case types.RSID:
      return {
        ...state,
        cantidadElem: state.cantidadElem - 1,
        idArr: state.numElem - 2,
        haytask: false,
        notiDEL: true,
        notiOK: false
      };
    case types.ADDELEM:
      return {
        ...state,
        elements: action.addList,
        notiOK: true
      };
    case types.CONTEO:
      return {
        ...state,
        numElem: state.numElem + 1

        // idArr: state.cantidadElem + 1,
        // idElemento: state.idElemento + 1
      };
    case types.RST:
      return {
        ...state,
        numElem: state.numElem - 1,
        notiDEL: true
        // idArr: state.cantidadElem - 1,
        // idElemento: state.idElemento - 1
      };
    case types.TIMER:
      return {
        ...state,
        tim: action.timeR
      };
    default:
      return state;
  }
};

export default reducer;
