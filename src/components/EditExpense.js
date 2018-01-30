import React from 'react';
import Header from './Header';
const EditExpenses = (props) => {
    console.log(props)
    return (
        <div>
            <Header />
            Editing the expense with id of {props.match.params.id}
        </div>
    )
}

export default EditExpenses;