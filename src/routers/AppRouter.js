import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import NotFound from '../components/NotFound';
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioShow from '../components/PortfolioShow';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio/:id" component={PortfolioShow}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);



export default AppRouter;