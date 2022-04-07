import React from "react";
import { Link } from "react-router-dom";
import { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
  },
  imageListItem: {
      margin: '15px'
  },
  imageListImage: {
    cursor: "pointer",
    width: "100%",
    minHeight:"350px"
  },
  title: {
    color: "#FFFFF",
    fontWeight: "medium",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.5) 100%)",
  },
  formControl: {
  margin: theme.spacing(1),
  minWidth: 240,
  maxWidth: 240}
});

class FlexContent extends Component {
    constructor(){
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: [],
            releaseDateStart: "",
            releaseDateEnd: ""
        }
    }
    render() {
        const { classes } = this.props;

    return (
      <Fragment>
        <div className="left-container">
          <div className={classes.root}>
            <ImageList className={classes.imageList} rowHeight={360} cols={4}>
              {this.props.moviesData.map((item) => (
                <ImageListItem
                  key={item.poster_url}
                  className={classes.imageListItem}
                >
                  <Link to={`/details/${item.id}`} state={{id:item.id}}>
                    <img
                      src={item.poster_url}
                      alt={item.title}
                      className={classes.imageListImage}
                    />
                  </Link>
                  <ImageListItemBar
                    title={item.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(item.release_date).toDateString()}
                      </span>
                    }
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>

        <div className="right-container">
          <Card>
            <CardContent>
              <FormControl className={classes.formControl}>
                <Typography className={classes.title} color="primary" gutterBottom>
                  FIND MOVIES BY:
                </Typography>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                <Input id="movieName" onChange={this.movieNameChangeHandler} />
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-checkbox">
                  Genres
                </InputLabel>
                <Select
                  multiple
                  input={<Input id="select-multiple-checkbox-genre" />}
                  renderValue={(selected) => selected.join(",")}
                  value={this.state.genres}
                  onChange={this.genreSelectHandler}
                >
                  <MenuItem value="0">None</MenuItem>
                  {this.props.genres.map((genre) => (
                    <MenuItem key={genre.id} value={genre.name}>
                      <Checkbox
                        checked={this.state.genres.indexOf(genre.name) > -1}
                      />
                      <ListItemText primary={genre.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-checkbox">
                  Artists
                </InputLabel>
                <Select
                  multiple
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={(selected) => selected.join(",")}
                  value={this.state.artists}
                  onChange={this.artistSelectHandler}
                >
                  <MenuItem value="0">None</MenuItem>
                  {this.props.artists.map((artist) => (
                    <MenuItem
                      key={artist.id}
                      value={artist.first_name + " " + artist.last_name}
                    >
                      <Checkbox
                        checked={
                          this.state.artists.indexOf(
                            artist.first_name + " " + artist.last_name
                          ) > -1
                        }
                      />
                      <ListItemText
                        primary={artist.first_name + " " + artist.last_name}
                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  id="releaseDateStart"
                  label="Release Date Start"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>

              <FormControl className={classes.formControl}>
                <TextField
                  id="releaseDateEnd"
                  label="Release Date End"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
              <br />
              <br />
              <FormControl className={classes.formControl}>
                <Button variant="contained" color="primary">
                  APPLY
                </Button>
              </FormControl>
            </CardContent>
          </Card>
        </div>

      </Fragment>
    );
  }
}

export default withStyles(styles)(FlexContent);
