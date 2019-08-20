import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Segment, Image, Form, Checkbox, Button, TextArea, Icon } from 'semantic-ui-react';
import { selectItem, nombreTarea, descTarea, fechTarea, autorTarea } from '../../Redux/Actions/Items';

class Write extends Component{
    handleSelectItem=()=>{
        var v=false;
        this.props.selectItem(v);
    }
    handleTitulo=(e)=>{
      const a = e.target;
      const nom = (a.value);
      this.props.nombreTarea(nom);
    }
    handleDesc=(e)=>{
      const a = e.target;
      const desc = (a.value);
      this.props.descTarea(desc);
    }
    handleAutor=(e)=>{
      const a = e.target;
      const autor = (a.value);
      this.props.autorTarea(autor);
    }
    handleFecha=(e)=>{
      const a = e.target;
      const fech = (a.value);
      this.props.fechTarea(fech);
    }
    render(){
        var seleElemen=this.props.haytask;
        var idElem=this.props.idElemento;
        var NameTask=this.props.nombreTask;
        var DescTask= this.props.descripTask;
        var FechTask=this.props.fechTask;
        var AutorTask= this.props.autorTask;
        // console.log('TTTT',seleElemen);
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
                        <label>Nombre del autor</label>
                        <input placeholder={AutorTask} value={AutorTask} onChange={(e)=>this.handleAutor(e)}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Fecha</label>
                        <input type='date' placeholder={FechTask} value={FechTask} onChange={(e)=>this.handleFecha(e)}/>
                      </Form.Field>
                   </div>
                   <Form.Field>
                        <label>Titulo de tarea</label>
                        <input placeholder={NameTask} value={NameTask} onChange={(e)=>this.handleTitulo(e)}/>                       
                      </Form.Field>
                   <Form.Field>
                     <TextArea placeholder={DescTask} value={DescTask} onChange={(e)=>this.handleDesc(e)} style={{ minHeight: 240 }} />
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
        nombreTask:state.Items.nombreTask,
        descripTask:state.Items.descripTask,
        fechTask:state.Items.fechTask,
        autorTask:state.Items.autorTask,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        selectItem(i){
            dispatch(selectItem(i))
        },
        nombreTarea(n){
          dispatch(nombreTarea(n))
      },
      descTarea(desc){
          dispatch(descTarea(desc))
      },
      fechTarea(fech){
          dispatch(fechTarea(fech))
      },
      autorTarea(autor){
          dispatch(autorTarea(autor))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Write);