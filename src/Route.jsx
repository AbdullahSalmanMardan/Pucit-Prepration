import React from "react";
import Home from "./Home";
import TestDetail from "./TestDetail"
import GoodScore from "./GoodScore";
import GetAdmission from "./GetAdmission";
import Contact from './Contact';


import {   Route,Redirect , BrowserRouter, Switch} from 'react-router-dom';

const Route1=()=>
{
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="pucit-prepration/" component={Home} />
                
                <Route exact path="pucit-prepration/contact" component={Contact} />
                
                <Route exact path="pucit-prepration/Testdetail" component={TestDetail} />
            
                <Route exact path="pucit-prepration/GoodScore" component={GoodScore} />
            
                <Route exact path="pucit-prepration/Getadmission" component={GetAdmission} />
                <Redirect to="/" />
                </Switch>

        </BrowserRouter>
        </>
    )
}

export default Route1;