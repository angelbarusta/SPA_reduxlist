import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Popup, Item, Image, Segment } from "semantic-ui-react";
import "../../App.css";
import { ItemTask } from "./item.json";
import {
  selectItem,
  identifi,
  nombreTarea,
  descTarea,
  fechTarea,
  autorTarea,
  addIdElemento,
  addListElement
} from "../../Redux/Actions/Items";

//
class ListaItems extends Component {
  handleSelectItem = (idkey) => {
    var v = true;

    // //console.log('BB',nom);
    this.props.identifi(idkey);
    this.props.selectItem(v);

    let addList = this.props.elements; //[]
    this.props.addListElement(addList);
    // this.props.nombreTarea(nom);
    // this.props.descTarea(desc);
    // this.props.fechTarea(fech);
    // this.props.autorTarea(autor);
  };
  handleAdd = () => {
    let addList = this.props.elements; //[]

    addList.push(ItemTask);
    this.props.addIdElemento();
    this.props.addListElement(addList);
  };

  render() {
    var addList = this.props.elements;
    var idEl = this.props.cantidadElem;

    if (idEl > 0) {
      var i = this.props.idArr;
    } else {
      var i = 0;
    }
    let list = [addList[i]];

    if (idEl > 0) {
      var ItemGrup = addList.map((s, key) => {
        var idkey = key + 1;
        var nom = s.nombre;
        var desc = s.desc;
        var fech = s.fecha;
        var autor = s.autor;
        //onClick={()=>this.handleSelectItem(idkey,nom,desc,fech,autor)}
        return (
          <Item onClick={() => this.handleSelectItem(idkey)}>
            <Item.Content
              style={{
                background: "chocolate",
                padding: 10,
                borderRadius: "2em"
              }}>
              <h4 style={{ margin: "auto" }}>Elemento # {idkey}</h4>
              <p> {nom}</p>
            </Item.Content>
          </Item>
        );
      });
    } else {
      var ItemGrup = (
        <Item>
          <Item.Content
            style={{
              background: "chocolate",
              padding: 10,
              borderRadius: "2em"
            }}>
            <h4 style={{ margin: "auto" }}>Sin elementos</h4>
            <p> Haz click en el boton Agregar elemento</p>
          </Item.Content>
        </Item>
      );
    }

    return (
      <div>
        <Item.Group style={{ padding: 10 }}>
          <div>{ItemGrup}</div>
        </Item.Group>
        <Segment style={{ top: 480, background: "#1b1c1d" }}>
          <Button
            style={{ borderRadius: "2em" }}
            onClick={() => this.handleAdd()}>
            Agregar elemento
          </Button>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    elements: state.Items.elements,
    idElemento: state.Items.idElemento,
    cantidadElem: state.Items.cantidadElem,
    haytask: state.Items.haytask,
    nombreTask: state.Items.nombreTask,
    descripTask: state.Items.descripTask,
    fechTask: state.Items.fechTask,
    autorTask: state.Items.autorTask,
    idArr: state.Items.idArr
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectItem(i) {
      dispatch(selectItem(i));
    },
    identifi(idkey) {
      dispatch(identifi(idkey));
    },
    nombreTarea(n) {
      dispatch(nombreTarea(n));
    },
    descTarea(desc) {
      dispatch(descTarea(desc));
    },
    fechTarea(fech) {
      dispatch(fechTarea(fech));
    },
    autorTarea(autor) {
      dispatch(autorTarea(autor));
    },
    addIdElemento() {
      dispatch(addIdElemento());
    },
    addListElement(addList) {
      dispatch(addListElement(addList));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaItems);
