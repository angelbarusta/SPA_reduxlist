import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Popup, Item, Image } from 'semantic-ui-react'
import '../../App.css';
import {ItemTask} from './item.json';
import { selectItem } from '../../Redux/Actions/Items';

//
class ListaItems extends Component{
    handleSelectItem=()=>{
        var v=true;
        this.props.selectItem(v);
    }
    render(){
        const ItemGrup=ItemTask.map((s,i)=>{
            return(                
                 <Item onClick={()=>this.handleSelectItem()}>
                  <Item.Content style={{background: 'chocolate',padding:10,borderRadius:'2em'}}> 
                  <h4 style={{margin:'auto'}}>Elemento # {i+1}</h4>
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
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaItems);