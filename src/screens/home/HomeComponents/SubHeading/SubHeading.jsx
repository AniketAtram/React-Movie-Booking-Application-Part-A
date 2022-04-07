import React from 'react';
import { Component, Fragment } from 'react';
import './SubHeading.css';

class SubHeading extends Component {
    render() {
        return (
            <Fragment>
                <div className="upcoming-movies-heading" key="sub-heading">
                    <span>Upcoming Movies</span>
                </div>
            </Fragment>
        )
    }
}

export default SubHeading;