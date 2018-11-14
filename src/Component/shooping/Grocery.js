import React, {Component} from 'react';

class Grocery extends Component{
    render(){

        return(<div><b>Grocery: </b>Because midnight food is a necessity.{this.props.balance}</div>);
    }
}

export default Grocery;