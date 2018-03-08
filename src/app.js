import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Watter bill', amount: 500,  }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 4500 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }))

const state = store.getState();
const visibleExpanses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpanses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
