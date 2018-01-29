import React from 'react'
import Option from './Option'


const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>Remove all!</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add option to get started!!</p>}
            {
                props.options.map((ele, index) => (
                    <Option
                        key={ele}
                        optionText={ele}
                        count={index + 1}
                        handleDeleteOne={props.handleDeleteOne}
                    />
                ))
            }
        </div>
    );
}

export default Options;