import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.state = { amt: 0, cat: "", descr: "" };
        console.log(this.state);
}

    changeExpense(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    

    onBtnClick(){
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
            console.log(this.state.expenses);
        });
    }

    render() {
        return (
            <div>
                <form>
                    <SingleInput id="amt" content={this.state.amt} type="number"
                     placeholder="$" controlFunc={this.changeExpense} />
                    <SingleInput id="cat" content={this.state.cat} type="text"
                     placeholder="Category" controlFunc={this.changeExpense} />
                    <SingleInput id="descr" content={this.state.descr} type="text"
                     placeholder="Description" controlFunc={this.changeExpense} />
                    <button type="button" onClick={this.onBtnClick} >Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;
