import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Comments from "../../Comments/Comments";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: 30,
  padding: 100,
});

const PostDetail = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { title, body, id, userId } = post;
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <center>
        <h2>Post Details</h2>
      </center>
      <center>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Post Id: {id}
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Author Id: {userId}
            </Typography>
            <Typography variant="body2" component="p">
              {body}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </center>
      <center>
        <h2>Comments</h2>
        <Comments></Comments>
      </center>
    </div>
  );
};

export default PostDetail;
