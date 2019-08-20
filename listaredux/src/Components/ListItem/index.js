import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Popup, Item, Image, Segment } from 'semantic-ui-react'
import '../../App.css';
import {ItemTask} from './item.json';
import { selectItem, identifi } from '../../Redux/Actions/Items';

//
class ListaItems extends Component{
    handleSelectItem=(idkey)=>{
        var v=true;
        console.log('BB',idkey);
        this.props.identifi(idkey);
        this.props.selectItem(v);
    }
    render(){
        const ItemGrup=ItemTask.map((s,key)=>{
            var idkey=key+1;
            return(                
                 <Item onClick={(i)=>this.handleSelectItem(idkey)}>
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
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaItems);