import React from 'react';
import { NavLink, Route } from 'react-router-dom';



const Portfolio = () => (
    <div>
        <h1>My work</h1>
        <p>Checkout the fallowing things i've done: </p>
        <NavLink to="/portfolio/1">Item One </NavLink>
        <NavLink to="/portfolio/2">Item Two </NavLink>
        {/* <Route path="/portfolio/:id" component={}/> */}
    </div>
)

export default Portfolio;