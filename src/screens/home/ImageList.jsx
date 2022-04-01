import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, makeStyles } from '@material-ui/core';

function ImageListComponent(props) {
    console.log(props);
    // CSS FOR THE IMAGE LIST COMPONENTS
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        imageList: {
            flexWrap: props.wrap,
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            // color: theme.palette.primary.light,
            color: '#ffffff'
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.7) 100%)',
        },
        posterImg: {
            width:'100%'
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} rowHeight={props.rowHeight} cols={props.cols}>
                {props.moviesData.map((item) => (
                    <ImageListItem key={item.id}>
                        <img src={item.poster_url} alt={item.title} className={classes.posterImg}/>
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
    );
}
export default ImageListComponent;