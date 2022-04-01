import React from "react";
import { Component, Fragment } from "react";
import Header from '../../common/header/Header';
import './Home.css';
import ImageListComponent from "./ImageList";
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
                {/* The single line image list */}
                <div className="single-line-image-list">
                    <ImageListComponent />
                </div>
            </Fragment>
        )
    }
}

export default Home;