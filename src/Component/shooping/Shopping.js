import React, { Component } from 'react';
import Fashion from './Fashion';
import Grocery from './Grocery';
import Travel from './Travel';

class Shopping extends Component {
    constructor(props) {
        super(props);
        this.transcationValueRef = React.createRef();
    }
    render() {
        return (
            <React.Fragment>
                <h3> Waoo Shopping from {this.props.balance}</h3>
                <div><input type='number' ref={this.props.reference} /></div>
                <div>
                    <button onClick={() => { this.props.debitBalance() }}>debit</button>
                    <button onClick={() => { this.props.creditBalance() }}>credit</button>
                </div>

                <Fashion balance={this.props.balance} />
                <Grocery balance={this.props.balance} />
                <Travel balance={this.props.balance} />
            </React.Fragment>
        );
    }
}

export default Shopping;