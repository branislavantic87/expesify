import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class CreateExpense extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense))
        this.props.onSubmit(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(CreateExpense)