import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 512,
    marginBottom: 30,
    background: "#f3f3f3",
  },

  avatar: {
    backgroundColor: "#23395d",
  },
}));
const Comment = (props) => {
  const classes = useStyles();
  const { name, email, body } = props.comment;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt={name} src="https://imgur.com/gPHfBtr"></Avatar>}
          title={name}
          subheader={email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Comment;
