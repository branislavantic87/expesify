import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';

const EditExpenses = (props) => {
    return (
        <div>
            <Header />
            <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/')
            }}  />
             <button onClick={() => {
                 props.dispatch(removeExpense({id: props.expense.id}))
                 props.history.push('/')
             }}>REMOVE</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) =>  expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpenses)