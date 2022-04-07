import React from "react";
import { Component, Fragment } from "react";
import Header from '../../common/header/Header';
import SubHeading from './HomeComponents/SubHeading/SubHeading';
import SingleLineImageList from './HomeComponents/ImageList/SingleLineImageList';
import FlexContent from './HomeComponents/FlexContent/FlexContent';
import moviesData from "../../assets/moviesData";
import genres from "../../assets/genre";
import artists from "../../assets/artists";
class Home extends Component {

    render() {
        return (
            <Fragment>
                {/* Primary header of the app */}
                <Header />

                {/* Sub heading under the header */}
                <SubHeading subHeading={"Upcoming Movies"} />

                {/* Single line image list of upcoming movies */}
                <SingleLineImageList moviesData={moviesData} />

                {/* flex-container */}
                <div className="flex-container" style={{display:"flex"}}>
                    <FlexContent moviesData={moviesData} artists={artists} genres={genres} />
                </div>
            </Fragment>
        )
    }
}

export default Home;