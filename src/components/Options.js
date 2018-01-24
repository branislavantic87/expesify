import React from 'react'
import Option from './Option'


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all!</button>
            {props.options.length === 0 && <p>Please add option to get started!!</p>}
            {
                props.options.map((ele) => (
                    <Option
                        key={ele}
                        optionText={ele}
                        handleDeleteOne={props.handleDeleteOne}
                    />
                ))
            }
        </div>
    );
}

export default Options;