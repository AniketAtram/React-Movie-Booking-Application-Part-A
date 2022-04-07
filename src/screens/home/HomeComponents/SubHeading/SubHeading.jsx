import React from 'react';
import { Component, Fragment } from 'react';
import './SubHeading.css';

class SubHeading extends Component {
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <div className="upcoming-movies-heading" key="sub-heading">
                    <span>{this.props.subHeading}</span>
                </div>
            </Fragment>
        )
    }
}

export default SubHeading;