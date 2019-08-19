import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../../App.css';

class ListaItems extends Component{
    render(){
        return(
            <div className='barListItem'>
                ListaItems
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