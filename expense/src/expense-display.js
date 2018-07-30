import React, { Component } from 'react';

class ExpenseDisplay extends Component {

    renderExpenses() {
        return this.props.expenses.map((expense, index) => <li key={index}>{JSON.stringify(expense)}</li>);
    }

    render() {
        return (
             <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;