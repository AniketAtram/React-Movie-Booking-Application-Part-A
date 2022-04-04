import React from "react";
import { Component, Fragment } from "react";
import Header from '../../common/header/Header';
import './Home.css';
import moviesData from "../../assets/moviesData";
import ImageListComponent from "./ImageList";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieList: moviesData
        }
    }

    onClickHandler = () => {
        alert('Redirecting to details page!');
    }
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
                    <ImageListComponent moviesData={this.state.movieList} rowHeight={250} cols={6} wrap={'nowrap'} />
                </div>
                {/* flex-container */}
                <div className="flex-container">
                    <div className="left-container flex-container-inner">
                        <ImageListComponent moviesData={this.state.movieList} rowHeight={350} cols={4} margin={'15px'} 
                        cursor={'pointer'} onClickHandler={this.onClickHandler} />
                    </div>
                    <div className="right-container flex-container-inner">

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;