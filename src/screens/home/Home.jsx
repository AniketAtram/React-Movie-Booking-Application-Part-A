import React from "react";
import { Component, Fragment } from "react";
import Header from '../../common/header/Header';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* Primary header of the app */}
                <Header />
                {/* Sub heading under the header */}
                <div className="sub-heading" key="sub-heading">
                    <span key="upcoming-movies">Upcoming Movies</span>
                </div>
            </Fragment>
        )
    }
}

export default Home;