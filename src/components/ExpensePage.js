import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';

const ExpensePage = () => (
    <div>
        <Header />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpensePage;