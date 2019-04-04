import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class FirstPage extends Component{
    state={
        name : ""
      }
      setName=(event)=>{
        this.setState({
          name : event.target.value
        })
        if (event.key === 'Enter') {
            this.redirect()
          }
      }
    redirect=()=>{
        this.props.history.push("/food",{
            name : this.state.name
        });
    }
   
    render(){
        return(
            <div>
            <h3>Enter Your Name</h3>
            <form>
            <input type="text" onChange={(event)=>this.setName(event)} />
            <button type="submit" onClick={this.redirect}>Click Me</button>
            </form>
            </div>
        )
    }
}
export default withRouter(FirstPage);