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
import { visibilidad, selectItem, Time } from "../../Redux/Actions/Items";
import "../../App.css";
import moment from "moment";

class WriteTask extends Component {
  constructor() {
    super();
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  }
  handleShowClick = () => {
    var v = true;
    this.props.visibilidad(v);
  };
  muestraReloj = () => {
    var timeR = moment(Date()).format("hh:mm:ss ");
    console.log("TIME", timeR);
    this.props.Time(timeR);
  };
  componentWillUpdate() {
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  }
  render() {
    var cant = this.props.numElem;
    var { autorTask, nombreTask, fechTask } = this.props;
    if (cant > 0) {
      var colr = "red";
    } else {
      var colr = "green";
    }
    var DateR = moment(Date()).format("DD/MM/YYYY");
    var { tim } = this.props;
    return (
      <div className='barListItem'>
        <Card onClick={this.handleShowClick} className='eventNoti'>
          <Card.Content>
            <Card.Header>Resumen</Card.Header>
            <div>
              <p>Hoy es: {DateR}</p>
              <p>Hora: {tim}</p>
            </div>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Label circular color={colr} style={{ width: 10, height: 10 }}>
                  {cant}
                </Label>
                <Feed.Content>
                  <Feed.Date
                    content='Numero de tareas'
                    style={{ paddingBottom: 10 }}
                  />
                  <div className='flex_'>
                    <Feed.Date content={fechTask} />
                    <Icon name='time' />
                  </div>
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

        <div className='WriteBloc'>
          <Write />
        </div>
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
    autorTask: state.Items.autorTask,
    tim: state.Items.tim
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    visibilidad(v) {
      dispatch(visibilidad(v));
    },
    selectItem(i) {
      dispatch(selectItem(i));
    },
    Time(timeR) {
      dispatch(Time(timeR));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteTask);
