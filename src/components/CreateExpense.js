import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const CreateExpense = (props) => (
    <div>
    <Header />
       <h1>Add Expense</h1>
       <ExpenseForm 
       onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
       }}
       />
    </div>
);

export default connect()(CreateExpense)