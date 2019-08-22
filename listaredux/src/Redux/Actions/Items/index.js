import * as types from "../../Types";

export const visibilidad = (v) => {
  return {
    type: types.VISIBILI,
    v
  };
};
export const selectItem = (v) => {
  return {
    type: types.SELECCIONANDOTEM,
    v
  };
};
export const identifi = (idkey) => {
  return {
    type: types.IDENTIFI,
    idkey
  };
};
export const nombreTarea = (nom) => {
  return {
    type: types.NOMBRETASK,
    nom
  };
};
export const descTarea = (desc) => {
  return {
    type: types.DESC,
    desc
  };
};
export const fechTarea = (fech) => {
  return {
    type: types.FECH,
    fech
  };
};
export const autorTarea = (autor) => {
  return {
    type: types.AUTOR,
    autor
  };
};
export const addIdElemento = () => {
  return {
    type: types.ADDID
  };
};
export const restIdElemento = () => {
  return {
    type: types.RSID
  };
};
export const addListElement = (addList) => {
  return {
    type: types.ADDELEM,
    addList
  };
};
export const conteo = () => {
  return {
    type: types.CONTEO
  };
};
export const resta = () => {
  return {
    type: types.RST
  };
};
