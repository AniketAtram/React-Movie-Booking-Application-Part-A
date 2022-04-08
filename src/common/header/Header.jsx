import React from "react";
import { Component, Fragment } from "react";
import logo from '../../assets/logo.svg';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <img src={logo} alt='website-logo' key="website-logo" className="website-logo" />
                </div>
            </Fragment>
        )
    }
}

export default Header;