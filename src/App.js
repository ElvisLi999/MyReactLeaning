import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {id: 'e1', title: 'Toilet Paper', amount: 45.32, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.80, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 587.33, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 359.99, date: new Date(2021, 5, 12)},
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  //{}:object that sets all the attributes
  //Third and more agruments: contents(elements) inside
  return React.createElement(
    'div',
    {},
    // React.createElement('h2', {},'Let\'s get started!'),
    React.createElement(NewExpense,{onAddExpense: addExpenseHandler}),
    React.createElement(Expenses, {items: expenses})
    );

  // Same to the previous one
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <NewExpense />
  //     <Expenses items={expenses}/>
  //   </div>
  // );
};

export default App;
