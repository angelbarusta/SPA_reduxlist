import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Segment, Image, Form, Checkbox, Button, TextArea, Icon } from 'semantic-ui-react';

class Write extends Component{
    render(){
        return(
            <Grid stackable columns={1}>

            <Grid.Column>
              <Segment style={{height:'-webkit-fill-available'}}>
                  <Icon circular  name='user' style={{fontSize: '4.5em'}}/>
                <Form>
                   <div style={{display:'flex',justifyContent:'center'}}>
                      <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                      </Form.Field>
                      <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                      </Form.Field>
                   </div>
                   <Form.Field>
                        <label>Titulo</label>
                        <input placeholder='Titulo' />
                      </Form.Field>
                   <Form.Field>
                     <TextArea placeholder='Tell us more' style={{ minHeight: 240 }} />
                   </Form.Field>
                  
                </Form>
                <Button type='submit'>Submit</Button>
              </Segment>
            </Grid.Column>

          </Grid>
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

export default connect(mapStateToProps,mapDispatchToProps)(Write);