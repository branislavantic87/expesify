import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = [expensesReducerDefaultState], action) => {
    switch (action.type) {
        default:
        return state;
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'asdaqwe',
        description: 'January Rent',
        note: 'This was the final payment for this address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
