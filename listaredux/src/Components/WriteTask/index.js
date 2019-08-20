import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Card, Feed, Label } from 'semantic-ui-react'
import Write from './writeForm';
import { visibilidad, selectItem } from '../../Redux/Actions/Items';

class WriteTask extends Component{
    
      
    handleShowClick = () =>{
        var v=true;
        this.props.visibilidad(v);              
      }
    render(){
        return(
            <div style={{display:'flex',justifyContent:'space-between'}} >
               <Card onClick={this.handleShowClick} style={{width:'24%',margin:0,height:180}} >
                  <Card.Content>
                    <Card.Header>Recent Activity</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Label circular color={'red'} style={{width:10,height:10}}>1</Label>
                        <Feed.Content>
                          <Feed.Date content='1 day ago' />
                          <Feed.Summary>
                            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>

               <Card style={{margin:0,width:'75%',height:'-webkit-fill-available'}} >
                 <Write/>
               </Card>

            </div>
        )
    };
};

const mapStateToProps=(state)=>{
    return{
        visibility:state.Items.visibility,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        visibilidad(v){
            dispatch(visibilidad(v))
          },
          selectItem(i){
            dispatch(selectItem(i))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WriteTask);