import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Segment, Image, Form, Checkbox, Button, TextArea, Icon } from 'semantic-ui-react';
import { selectItem } from '../../Redux/Actions/Items';

class Write extends Component{
    handleSelectItem=()=>{
        var v=false;
        this.props.selectItem(v);
    }
    render(){
        var seleElemen=this.props.haytask;
        var idElem=this.props.idElemento;
        console.log('TTTT',seleElemen);
        return(
            <Grid stackable columns={1}>

            {
                seleElemen ?
                <Grid.Column>
              <Segment style={{height:'-webkit-fill-available'}}>
                <h4>Estas editando la tarea #{idElem}</h4>
                    <Icon circular  name='user' style={{fontSize: '4.5em'}}/>
                <Form>
                   <div style={{display:'flex',justifyContent:'center'}}>
                      <Form.Field>
                        <label>Nombre</label>
                        <input placeholder='First Name' />
                      </Form.Field>
                      <Form.Field>
                        <label>Apellidos</label>
                        <input placeholder='Last Name' />
                      </Form.Field>
                   </div>
                   <Form.Field>
                        <label>Titulo de tarea</label>
                        <input placeholder='Titulo...' />                       
                      </Form.Field>
                   <Form.Field>
                     <TextArea placeholder='Descrpcion...' style={{ minHeight: 240 }} />
                   </Form.Field>
                  
                </Form>
                <div style={{display:'flex',justifyContent:'space-between',padding:10}}>                  
                  <Button style={{borderRadius:'2em'}} onClick={()=>this.handleSelectItem()}>Cancelar</Button>
                  <Button type='submit' style={{borderRadius:'2em'}}>Guardar</Button>
                </div>
              </Segment>
            </Grid.Column>
            :

            <Grid.Column>
              <Segment style={{height:'-webkit-fill-available'}}>
                  <Icon circular  name='user' style={{fontSize: '4.5em'}}/>
                <h4>No has seleccionado un elemento</h4>
              </Segment>
            </Grid.Column>
            }

          </Grid>
        )
    };
};

const mapStateToProps=(state)=>{
    return{
        haytask:state.Items.haytask,
        idElemento:state.Items.idElemento,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        selectItem(i){
            dispatch(selectItem(i))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Write);