import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'

class WriteTask extends Component{
    render(){
        return(
            <Card>
              <Card.Content header='About Amy' />
              <Card.Content description='Hola' /> 
              <Card.Content extra> 
                <Icon name='user' />
                4 Friends
              </Card.Content>
            </Card>
        )
    };
};

const mapStateToProps=(state)=>{
    return{

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WriteTask);