import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Segment, Image } from 'semantic-ui-react';

class Write extends Component{
    render(){
        return(
            <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
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