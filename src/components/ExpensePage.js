import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import MojApi from './MojApi';

const ExpensePage = () => (
    <div>
        <Header />
        <ExpenseListFilters />
        <ExpenseList />
        <MojApi />
    </div>
)

export default ExpensePage;