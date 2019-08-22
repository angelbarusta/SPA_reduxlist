import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Card,
  Feed,
  Label
} from "semantic-ui-react";
import Write from "./writeForm";
import { visibilidad, selectItem } from "../../Redux/Actions/Items";
import "../../App.css";

class WriteTask extends Component {
  handleShowClick = () => {
    var v = true;
    this.props.visibilidad(v);
  };
  render() {
    var cant = this.props.numElem;
    var { autorTask, nombreTask, fechTask } = this.props;

    return (
      <div className='barListItem'>
        <Card onClick={this.handleShowClick} className='eventNoti'>
          <Card.Content>
            <Card.Header>Actividad reciente</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Label circular color={"red"} style={{ width: 10, height: 10 }}>
                  {cant}
                </Label>
                <Feed.Content>
                  <Feed.Date
                    content='Numero de tareas'
                    style={{ paddingBottom: 10 }}
                  />
                  <Feed.Date content={fechTask} />
                  {cant > 0 ? (
                    <Feed.Summary>
                      {autorTask} <a> a creado la tarea </a>
                      {nombreTask}
                      {fechTask == undefined || fechTask == "" ? (
                        <a> Fecha sin definir </a>
                      ) : (
                        <div>
                          <a> de la fecha </a>
                          <div>{fechTask}</div>
                        </div>
                      )}
                    </Feed.Summary>
                  ) : (
                    <Feed.Summary>Sin Tareas</Feed.Summary>
                  )}
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>

        <Card className='WriteBloc'>
          <Write />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibility: state.Items.visibility,
    elements: state.Items.elements,
    cantidadElem: state.Items.cantidadElem,
    numElem: state.Items.numElem,
    nombreTask: state.Items.nombreTask,
    descripTask: state.Items.descripTask,
    fechTask: state.Items.fechTask,
    autorTask: state.Items.autorTask
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    visibilidad(v) {
      dispatch(visibilidad(v));
    },
    selectItem(i) {
      dispatch(selectItem(i));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteTask);
