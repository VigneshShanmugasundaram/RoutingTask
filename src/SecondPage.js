import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SecondPage extends Component{
    
      redirect=(event)=>{        
        this.props.history.push("/final",{
            name: this.props.location.state.name,
            item : event.target.value
        });
      }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Hello ......{this.props.location.state.name}</h3>
                <h4>Enter Your Favourite Food</h4>
                <form>
                <select onChange={(event)=>this.redirect(event)}>
                  <option>Select Food</option>
                  <option value="Pie">Pie</option>
                  <option value="Salads">Salads</option>
                  <option value="Noodles">Noodles</option>
                  <option value="Egg">Egg</option>
                  <option value="Burgers">Burgers</option>
                  <option value="Meat">Meat</option>
                  <option value="Sea Food">Sea Food</option>
                  <option value="Bread">Bread</option>
                  <option value="Diary Products">Diary Products</option>
                  <option value="Sandwithes">Sandwitches</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Soups">Soups</option>
                </select>
                </form>
                </div>
        )
    }
}
export default withRouter(SecondPage);