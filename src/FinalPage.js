import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class FinalPage extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Hello.........{this.props.location.state.name}</h3>
                <h4>Your Favourite Food is.....{this.props.location.state.item}</h4>

            </div>

        )
    }
}
export default withRouter(FinalPage);