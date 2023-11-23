import React, { Fragment } from "react";
import NavbarPage from "../../../module/header/Navbar/Navbar";
import { Link } from "react-router-dom";


function PageNotFound(){
    return(
        <Fragment>
            <NavbarPage/>
              <div className="card mx-auto mt-5 col-4 text-center">
                <div className="card-body">
                    <h1 className="display-1">404</h1>
                    <h6>Page not found</h6>
                    <Link to="/home" className="text-center" >Go to homepage</Link>
                </div>
              </div>
        </Fragment>
    );
}

export default PageNotFound;