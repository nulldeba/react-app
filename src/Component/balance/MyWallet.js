import React, { Component } from 'react';
import Shopping from '../shooping/Shopping';
import Food from '../food/Food';
import Activity from '../activity/Activity';

class MyWallet extends Component {

    constructor(props) {
        super(props);
        this.balanceRef=React.createRef();
        this.setValue = this.setValue.bind(this);
        this.setYourAmount = this.setYourAmount.bind(this);
        this.debitBalance = this.debitBalance.bind(this);
        this.creditBalance = this.creditBalance.bind(this);
        this.setInitialAmount = this.setInitialAmount.bind(this);
    }
    state = {
        balance: 0,
        amount: 0
    }

    setValue(e) {

        this.setState({
            amount: parseInt(e.target.value)
        })
    }
    setYourAmount(e) {
        this.setState({
            balance: parseInt(e.target.value)
        });
    }

    creditBalance(amount) {
        this.setState({
            balance: this.state.balance + amount
        })
    }

    debitBalance(amount) {
        this.setState({
            balance: this.state.balance - amount
        })
    }

    setInitialAmount() {
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
            <Shopping balance={this.state.balance} debitBalance={this.debitBalance} creditBalance={this.creditBalance} setValue={this.setValue} />
            <Food balance={this.state.balance} />
            <Activity balance={this.state.balance} />
        </React.Fragment>
        );
    }
}

export default MyWallet;