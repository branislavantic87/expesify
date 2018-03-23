import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem and create snapshot', () => {
    const wrapper = shallow( <ExpenseListItem {...expenses[0]}/> )
    expect(wrapper).toMatchSnapshot()
});