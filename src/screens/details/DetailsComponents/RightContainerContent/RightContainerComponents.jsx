import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Rate from '../Ratings/Rate';
import './RightContainerComponents.css'

const styles = (theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
    },
    title: {
        color: "#FFFFF",
        fontWeight: "medium",
        fontSize: "12px"
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.5) 100%)",
    },
    imageListItem: {
        minwidth: "350px",
        cursor: "pointer"

    },
});


class RightContent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography>
                    <b>Rate this movie:</b>
                </Typography>
                {/*Star ratings goes here*/}
                <div>
                    <Rate />
                </div>
                <Typography>
                    <b>Artists:</b>
                </Typography>
                <div className="details-artist-image-list">
                    <ImageList className={classes.imageList} rowHeight={180} cols={2}>
                        {this.props.artists.map((item) => (
                            <ImageListItem key={item.id} className={classes.imageListItem}>
                                <img
                                    src={item.profile_url}
                                    alt={item.title}
                                />
                                <ImageListItemBar
                                    title={`${item.first_name} ${item.last_name}`}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(RightContent);
