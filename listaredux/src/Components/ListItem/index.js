import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Popup, Item, Image } from 'semantic-ui-react'
import '../../App.css';
import {ItemTask} from './item.json';


class ListaItems extends Component{
    render(){
        const ItemGrup=ItemTask.map((s,i)=>{
            return(
                <Item.Group style={{padding:20 }}>
                 <Item>
                  <Item.Content style={{background: 'chocolate',padding:10}}>
                  <h4 style={{margin:'auto'}}>elemento # {i+1}</h4>
                   <p> {s.nombre}</p>                    
                  </Item.Content>
                </Item>
              </Item.Group>
            )
        });

        return(
            <div className='barListItem'>
               {ItemGrup}
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

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaItems);