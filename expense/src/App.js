import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseForm from './exspense-form';
import ExpenseDisplay  from './expense-display';

class App extends Component {
  constructor(props){
    super(props);
    this.addExpense = this.addExpense.bind(this);
    this.state = {
      expenses:[]
    };
    this.addExpense = this.addExpense.bind(this);
  }

addExpense(expense){
  this.setState({expenses: this.state.expenses.concat(expense) });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ExpenseForm addExpense={this.addExpense}/>
        <ExpenseDisplay expenses={this.state.expenses}/>

      </div>
    );
  }
}

export default App;
