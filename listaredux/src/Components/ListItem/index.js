import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Popup, Item, Image, Segment } from 'semantic-ui-react'
import '../../App.css';
import {ItemTask} from './item.json';
import { selectItem, identifi, nombreTarea } from '../../Redux/Actions/Items';

//
class ListaItems extends Component{
   
    handleSelectItem=(idkey,nom)=>{
        var v=true;

        console.log('BB',nom);
        this.props.identifi(idkey);
        this.props.selectItem(v);
        this.props.nombreTarea(nom);
    }
    render(){
        const ItemGrup=ItemTask.map((s,key)=>{
            var idkey=key+1;
            var nom=s.nombre;
            return(                
                 <Item onClick={()=>this.handleSelectItem(idkey,nom)}>
                  <Item.Content style={{background: 'chocolate',padding:10,borderRadius:'2em'}}> 
                  <h4 style={{margin:'auto'}}>Elemento # {idkey}</h4>
                   <p> {s.nombre}</p>                    
                  </Item.Content>
                </Item>
            )
        });

        return(
            <div >
                <Item.Group style={{padding:10 }}>
                  <div >
                    {ItemGrup}
                  </div>
                </Item.Group>  
                <Segment style={{top:480,background:'#1b1c1d'}}>
                  <Button style={{borderRadius:'2em'}}>Agregar elemento</Button> 
                </Segment>           
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        selectItem(i){
            dispatch(selectItem(i))
        },
        identifi(idkey){
            dispatch(identifi(idkey))
        },
        nombreTarea(n){
            dispatch(nombreTarea(n))
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaItems);