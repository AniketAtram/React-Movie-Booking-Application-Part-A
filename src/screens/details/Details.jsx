import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import moviesData from '../../assets/moviesData';
import Header from '../../common/header/Header';
import LeftContent from './DetailsComponents/LeftContainerContent/LeftContainerComponents';
import RightContent from './DetailsComponents/RightContainerContent/RightContainerComponents';
import MiddleContent from './DetailsComponents/MiddleContainerContent/MiddleContainerComponents';

class Details extends Component {
    constructor() {
        super();
            this.state = {
                poster_url: "",
                title: "",
                genre: [],
                duration: 0,
                releaseDate: "",
                rating: 0,
                plot: "",
                trailer_url: "",
                artists: []
            }
    }

    componentDidMount() {
        const urlParams = window.location.toString().split("/");
        const movieId = urlParams[urlParams.length-1];
        const currentMovieData = moviesData.filter(movie => movie.id === movieId)[0];
        const currentState = this.state;
        currentState.poster_url = currentMovieData.poster_url;
        currentState.title = currentMovieData.title;
        currentState.genre = currentMovieData.genres;
        currentState.duration = currentMovieData.duration;
        currentState.releaseDate = currentMovieData.release_date;
        currentState.rating = currentMovieData.critics_rating;
        currentState.plot = currentMovieData.storyline;
        currentState.trailer_url = currentMovieData.trailer_url;
        currentState.artists = currentMovieData.artists;
        this.setState(currentState);
    }
    render() {
        console.log(this.state);
        return (
            <Fragment>
                    <div className="index-container">
                    <Header />
                    <Button variant="contained" className="header-button" color="primary"> BOOK NOW  </Button>
                    <div className="bact-to-home-button">
                        <Link to="/" className="link"><Typography> &#60;&#60; Back To Home </Typography></Link>
                    </div>
                    <div className="deatils-flex-container">
                        <div className="details-left-container">
                            <LeftContent
                            image_url={this.state.poster_url}
                            />
                        </div>
                        <div className="details-middle-container">
                            <MiddleContent
                                title = {this.state.title}
                                genre = {this.state.genre}
                                duration = {this.state.duration}
                                releaseDate = {this.state.releaseDate}
                                rating = {this.state.rating}
                                plot = {this.state.plot}
                                trailer_url = {this.state.trailer_url}
                            />
                        </div>
                        <div className="details-right-container">
                            <RightContent artists={this.state.artists}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Details;