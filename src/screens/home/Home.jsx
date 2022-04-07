import React from "react";
import { Component, Fragment } from "react";
import Header from '../../common/header/Header';
import SubHeading from './HomeComponents/SubHeading/SubHeading';
import SingleLineImageList from './HomeComponents/ImageList/SingleLineImageList';
import FlexContent from './HomeComponents/FlexContent/FlexContent';
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
                <SubHeading />

                {/* Single line image list of upcoming movies */}
                {/* <SingleLineImageList /> */}

                {/* flex-container */}
                <div className="flex-container">
                    {/* <FlexContent /> */}
                </div>
            </Fragment>
        )
    }
}

export default Home;