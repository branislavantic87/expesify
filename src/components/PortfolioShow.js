import React from 'react';


const PortfolioShow = (props) => {
    console.log(props)
    return (
        <div>
            <h1>A thing i've done</h1>
            <p>This page is for the item with id of {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioShow;