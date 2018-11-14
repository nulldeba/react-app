import React, { Component } from 'react';
import Shopping from '../shooping/Shopping';
import Food from '../food/Food';
import Activity from '../activity/Activity';

class MyWallet extends Component {

    constructor(props) {
        super(props);
        this.balanceRef=React.createRef();
        this.transcationValueRef = React.createRef();
        this.debitBalance = this.debitBalance.bind(this);
        this.creditBalance = this.creditBalance.bind(this);
        this.setInitialAmount = this.setInitialAmount.bind(this);
    }
    state = {
        balance: 0,
        amount: 0
    }


    creditBalance() {
        if(!isNaN(this.transcationValueRef.current.valueAsNumber))
        this.setState({
            balance: this.state.balance + this.transcationValueRef.current.valueAsNumber
        });
        this.transcationValueRef.current.valueAsNumber='';
    }

    debitBalance(amount) {
        if(!isNaN(this.transcationValueRef.current.valueAsNumber))
        this.setState({
            balance: this.state.balance - this.transcationValueRef.current.valueAsNumber
        })
        this.transcationValueRef.current.valueAsNumber='';
    }

    setInitialAmount() {
        if(!isNaN(this.balanceRef.current.valueAsNumber))
            this.setState({
                balance: this.balanceRef.current.valueAsNumber
            });
            this.balanceRef.current.value='';
    }


    render() {
        return (<React.Fragment>
            <div>Okay, Enter your current balance. </div>
            <input type='number'  ref={this.balanceRef} placeholder='Enter your amount' />
            <button onClick={this.setInitialAmount}>Add</button>
            <div>My balance is : {this.state.balance}</div>

            <Shopping balance={this.state.balance} debitBalance={this.debitBalance} creditBalance={this.creditBalance} reference={this.transcationValueRef} />
            <Food balance={this.state.balance} />
            <Activity balance={this.state.balance} />
        </React.Fragment>
        );
    }
}

export default MyWallet;