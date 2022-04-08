import React, { Component, Fragment } from 'react';

export default class LeftContent extends Component {
    render() {
        return (
            <Fragment>
                <img src={this.props.image_url} alt="movie-poster" key="movie-poster" />
            </Fragment>
        )
    }
}