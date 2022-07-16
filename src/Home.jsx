import React from "react";
import img from './pics/pucit.jpg'

const Home=()=>
{
    return (
        <>

        <br/>
        


        <div className="containor">
            <div className="row">
                <div className="col-md-3">

                </div>

                <div className="col-md-6">
                <a href="https://www.facebook.com/groups/244405847268315/?ref=share" class="btn btn-primary">Contact_me</a>
                </div>

            </div>
            
            
            <div className="row">
                <div className="col-md-3">

                </div>


                <div className="col-md-6">
                   < br/>

                   <img src={img} class="img-fluid" alt="Pucit"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">

                </div>
            <div className="col-md-5">
            <h1>Introduction</h1>
                    <h6>My name is abdullah salman. I am doing computer scinece from punjab university
                        I am providing you the pucit test material for free so that everyone can prepare well and get 
                        admission in goverment university.
                    </h6>
            </div>
            
            </div>
        </div>
        < br/>
        </>
    )
}


export default Home;