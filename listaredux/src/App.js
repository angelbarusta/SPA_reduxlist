import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ListItem from "./Components/ListItem";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { visibilidad } from "./Redux/Actions/Items";
import WriteTask from "./Components/WriteTask";

class App extends Component {
  handleHideClick = () => {
    var v = false;
    this.props.visibilidad(v);
  };
  handleShowClick = () => {
    var v = true;
    this.props.visibilidad(v);
  };
  handleSidebarHide = () => {
    var v = false;
    this.props.visibilidad(v);
  };
  render() {
    const { visibility } = this.props;
    return (
      <div className='App'>
        <header className='App-header' onClick={this.handleShowClick}>
          <p>List-Redux</p>
        </header>

        <Sidebar.Pushable
          as={Segment}
          style={{ height: "-webkit-fill-available", margin: "auto" }}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visibility}
            className='siddbarEle'>
            <ListItem />
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic className='segmewri'>
              <WriteTask />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    visibility: state.Items.visibility
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    visibilidad(v) {
      dispatch(visibilidad(v));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
