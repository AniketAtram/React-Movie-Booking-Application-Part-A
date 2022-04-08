import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

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
        fontWeight: "bold",
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.5) 100%)",
    },
    imageListImage: {
        minheight: "250px",
        maxheight: "250px",
    },
});

class SingleLineImageList extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <ImageList className={classes.imageList} rowHeight={250} cols={6}>
                        {this.props.moviesData.map((item) => (
                            <ImageListItem key={item.poster_url}>
                                <img
                                    src={item.poster_url}
                                    alt={item.title}
                                    className={classes.imageListImage}
                                />
                                <ImageListItemBar
                                    title={item.title}
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
        );
    }
}

export default withStyles(styles)(SingleLineImageList);
