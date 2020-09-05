import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Post.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    // marginTop: 15,
    // marginBottom: 30,
    // marginRight: 15,
    margin: 7,
  },
  media: {
    height: 140,
    minWidth: 320,
  },
});

const Post = (props) => {
  const classes = useStyles();
  const { id, title, body } = props.post;
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1599143194181-88e43e745931?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Post Id: {id}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className="linkStyle" to={`/post/${id}`}>
            <Button variant="contained" size="small" color="primary">
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
