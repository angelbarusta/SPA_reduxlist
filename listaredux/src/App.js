import React,{Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import ListItem from './Components/ListItem';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { visibilidad } from './Redux/Actions/Items';

class App extends Component{
  
  handleHideClick = () => {
    var v=false;
    this.props.visibilidad(v);
  }
  handleShowClick = () =>{
    var v=true;
    this.props.visibilidad(v);
  }
  handleSidebarHide = () => {
    var v=false;
    this.props.visibilidad(v);
  }
  render(){
    const {visibility}=this.props;
    return (
      <div className="App">
        <header className="App-header">        
          <p>
            List-Redux
          </p>
          <Button.Group>
          <Button disabled={visibility} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visibility} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>
        </header>

        <Sidebar.Pushable as={Segment}  style={{height:'-webkit-fill-available'}}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visibility}
            width='thin'
            style={{width: '100%'}}
           
          >
           <ListItem/>

          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
  
               
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

        
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log("STATE",state);
  return{
    visibility:state.Items.visibility,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{ 
    visibilidad(v){
      dispatch(visibilidad(v))
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
