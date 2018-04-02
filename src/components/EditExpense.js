import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';

export class EditExpense extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Header />
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>REMOVE</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense( data ))
})

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)