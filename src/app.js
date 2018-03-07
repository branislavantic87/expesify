import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Watter bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(setTextFilter('gas'))

const state = store.getState();
const visibleExpanses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpanses)

ReactDOM.render(<AppRouter />, document.getElementById('app'))
