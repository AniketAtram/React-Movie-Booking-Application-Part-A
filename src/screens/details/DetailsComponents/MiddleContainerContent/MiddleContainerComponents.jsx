import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player'
import Typography from '@material-ui/core/Typography';
import './MiddleContainerComponents.css';
export default class MiddleContent extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {this.props.title}
                    </Typography>
                </div>

                <div>
                    <Typography className="typography-text" gutterBottom>
                        <b>Genre:</b> {this.props.genre.join(", ")}
                    </Typography>
                </div>

                <div>
                    <Typography className="typography-text" gutterBottom>
                        <b>Duration:</b> {this.props.duration}
                    </Typography>
                </div>

                <div>
                    <Typography className="typography-text" gutterBottom>
                        <b>Release Date:</b> {new Date(this.props.releaseDate).toDateString()}
                    </Typography>
                </div>

                <div>
                    <Typography className="typography-text" gutterBottom>
                        <b>Rating:</b> {this.props.rating}
                    </Typography>
                </div>

                <div className="plot">
                    <Typography className="typography-text" gutterBottom>
                        <b>Plot:</b> {this.props.plot}
                    </Typography>
                </div>

                <div>
                    <Typography className="typography-text" gutterBottom>
                        <b>Trailer:</b>
                    </Typography>
                </div>

                <div className="trailer-video">
                    <ReactPlayer url={this.props.trailer_url} width={700} height={400} />
                </div>

            </Fragment>
        )
    }
}
