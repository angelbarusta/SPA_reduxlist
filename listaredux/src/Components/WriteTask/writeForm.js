import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Segment,
  Image,
  Form,
  Checkbox,
  Button,
  TextArea,
  Icon,
  Popup,
  Label
} from "semantic-ui-react";
import {
  selectItem,
  nombreTarea,
  descTarea,
  fechTarea,
  autorTarea,
  addListElement,
  addIdElemento,
  visibilidad,
  resta,
  restIdElemento
} from "../../Redux/Actions/Items";

class Write extends Component {
  constructor() {
    super();
    this.state = {
      colorButton: false
    };
  }
  handleSelectItem = () => {
    var v = false;
    this.props.selectItem(v);
  };
  handleTitulo = (e) => {
    const a = e.target;
    const nom = a.value;
    this.props.nombreTarea(nom);
  };
  handleDesc = (e) => {
    const a = e.target;
    const desc = a.value;
    this.props.descTarea(desc);
  };
  handleAutor = (e) => {
    const a = e.target;
    const autor = a.value;
    this.props.autorTarea(autor);
  };
  handleFecha = (e) => {
    const a = e.target;
    const fech = a.value;
    this.props.fechTarea(fech);
  };
  handleSave = () => {
    const addList = this.props.elements; //[]

    var idElem = this.props.idElemento;
    var NameTask = this.props.nombreTask;
    var DescTask = this.props.descripTask;
    var FechTask = this.props.fechTask;
    var AutorTask = this.props.autorTask;
    var canItem = this.props.cantidadElem;
    this.props.addIdElemento();
    var inde = idElem - 1;

    var editTask = {
      nombre: NameTask,
      desc: DescTask,
      autor: AutorTask,
      fecha: FechTask
    };

    addList.splice(inde, 1, editTask);

    this.props.addListElement(addList);
  };
  handleShowClick = () => {
    var v = true;
    this.props.visibilidad(v);
  };
  handleDelete = () => {
    let addList = this.props.elements; //[]
    var i = this.props.idElemento;
    var dex = i - 1;

    addList.splice(dex, 1);
    this.props.restIdElemento();
    this.props.resta();
    this.props.addListElement(addList);
    var v = false;
    this.props.selectItem(v);
  };

  render() {
    var seleElemen = this.props.haytask;
    var idElem = this.props.idElemento;
    var NameTask = this.props.nombreTask;
    var DescTask = this.props.descripTask;
    var FechTask = this.props.fechTask;
    var AutorTask = this.props.autorTask;
    var canItem = this.props.cantidadElem;
    var { elements, numElem } = this.props;

    return (
      <Grid stackable columns={1}>
        {seleElemen === true && numElem !== 0 ? (
          <Grid.Column>
            <Segment style={{ height: "-webkit-fill-available" }}>
              <Popup
                content='Abre la lista de elementos'
                trigger={
                  <h4
                    onClick={() => this.handleShowClick()}
                    style={{ cursor: "pointer" }}>
                    Estas editando la tarea #
                    <Label
                      circular
                      color={"blue"}
                      style={{ width: 10, height: 10, padding: 10 }}>
                      {idElem}
                    </Label>
                  </h4>
                }
              />

              <Popup
                content={
                  <div>
                    ¿Decea eliminar la tarea?
                    <Button
                      style={{ background: "red", color: "white" }}
                      onClick={() => this.handleDelete()}>
                      Eliminar
                    </Button>
                  </div>
                }
                flowing
                hoverable
                trigger={
                  <Icon
                    circular
                    name='file'
                    style={{ fontSize: "4.5em", cursor: "pointer" }}
                    onClick={() => this.handleShowClick()}
                  />
                }
              />
              <Form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Form.Field>
                    <Popup
                      content='Es necesario ingresar quien Edita'
                      trigger={<label>Autor</label>}
                    />

                    <input
                      placeholder={AutorTask}
                      value={AutorTask}
                      onChange={(e) => this.handleAutor(e)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Popup
                      content='Apunta que fecha se registra el task'
                      trigger={<label>Fecha</label>}
                    />
                    <input
                      type='date'
                      placeholder={FechTask}
                      value={FechTask}
                      onChange={(e) => this.handleFecha(e)}
                    />
                  </Form.Field>
                </div>
                <Form.Field>
                  <Popup
                    content='Apunta el nombre de la tarea'
                    trigger={<label>Titulo de tarea</label>}
                  />
                  <input
                    placeholder={NameTask}
                    value={NameTask}
                    onChange={(e) => this.handleTitulo(e)}
                  />
                </Form.Field>
                <Form.Field>
                  <TextArea
                    placeholder={DescTask}
                    value={DescTask}
                    onChange={(e) => this.handleDesc(e)}
                    style={{ minHeight: 165 }}
                  />
                </Form.Field>
              </Form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10
                }}>
                <Button
                  style={{ borderRadius: "2em" }}
                  onClick={() => this.handleSelectItem()}>
                  Cancelar
                </Button>
                <Button
                  type='submit'
                  style={{ borderRadius: "2em" }}
                  onClick={() => this.handleSave()}>
                  Guardar
                </Button>
              </div>
            </Segment>
          </Grid.Column>
        ) : (
          <Grid.Column>
            <Segment style={{ height: "-webkit-fill-available" }}>
              <Icon circular name='file' style={{ fontSize: "4.5em" }} />
              {canItem > 0 ? (
                <div>
                  <h4>No has seleccionado un elemento</h4>
                  <div onClick={() => this.handleShowClick()}>
                    <p>Selecciona un elemento</p>
                    <Popup
                      content='Abre el menu de elementos creados'
                      trigger={
                        <Icon
                          name='edit'
                          circular
                          style={{ fontSize: "1.5em", cursor: "pointer" }}
                        />
                      }
                    />
                  </div>
                </div> //handleShowClick
              ) : (
                <div>
                  <h4>No has creado ningun elemento, crea uno para iniciar</h4>
                  <div onClick={() => this.handleShowClick()}>
                    <p>Añade un elemento</p>
                    <Popup
                      content='Crear elemento nuevo'
                      trigger={
                        <Icon
                          name='add'
                          circular
                          style={{ fontSize: "1.5em", cursor: "pointer" }}
                        />
                      }
                    />
                  </div>
                </div> //handleShowClick
              )}
            </Segment>
          </Grid.Column>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    haytask: state.Items.haytask,
    idElemento: state.Items.idElemento,
    nombreTask: state.Items.nombreTask,
    descripTask: state.Items.descripTask,
    fechTask: state.Items.fechTask,
    autorTask: state.Items.autorTask,
    cantidadElem: state.Items.cantidadElem,
    elements: state.Items.elements,
    numElem: state.Items.numElem
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectItem(i) {
      dispatch(selectItem(i));
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
    addListElement(addList) {
      dispatch(addListElement(addList));
    },
    addIdElemento() {
      dispatch(addIdElemento());
    },
    visibilidad(v) {
      dispatch(visibilidad(v));
    },
    resta() {
      dispatch(resta());
    },
    restIdElemento() {
      dispatch(restIdElemento());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Write);
