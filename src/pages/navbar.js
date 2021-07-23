import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="topnav">
                
                    <a><NavLink to="/signup/">Sign up</NavLink></a>
                    <a><NavLink to="/signin/">Sign in</NavLink></a>

            </nav>
        );
    }
}
export default Navbar;