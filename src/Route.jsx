import React from "react";
import Home from "./Home";
import TestDetail from "./TestDetail"
import GoodScore from "./GoodScore";
import GetAdmission from "./GetAdmission";
import Contact from './Contact';


import {   Route , BrowserRouter} from 'react-router-dom';

const Route1=()=>
{
    return (
        <>
        <BrowserRouter>
            
                <Route exact path="/" component={Home} />
                
                <Route exact path="/contact" component={Contact} />
                
                <Route exact path="/Testdetail" component={TestDetail} />
            
                <Route exact path="/GoodScore" component={GoodScore} />
            
                <Route exact path="/Getadmission" component={GetAdmission} />
        
        </BrowserRouter>
        </>
    )
}

export default Route1;