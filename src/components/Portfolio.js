import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PortfolioShow from './PortfolioShow';



const Portfolio = () => (
    <div>
        <h1>My work</h1>
        <p>Checkout the fallowing things i've done: </p>
        <NavLink to="/portfolio/1" activeClassName="is-active">Item One </NavLink>
        <NavLink to="/portfolio/2" activeClassName="is-active">Item Two </NavLink>
        <Route path="/portfolio/:id" component={PortfolioShow}/>
    </div>
)

export default Portfolio;