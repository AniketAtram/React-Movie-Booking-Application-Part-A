import React from "react";
import { Component, Fragment } from "react";
import Header from '../../common/header/Header';
import './Home.css';
import moviesData from "../../assets/moviesData";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieList: moviesData
        }
    }

    render() {
        return (
            <Fragment>
                {/* Primary header of the app */}
                <Header />
                {/* Sub heading under the header */}
                
                {/* flex-container */}
                <div className="flex-container">
                
                </div>
            </Fragment>
        )
    }
}

export default Home;