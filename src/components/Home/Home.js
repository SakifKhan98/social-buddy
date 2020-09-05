import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });
  return (
    <div>
      <Grid container>
        {" "}
        {posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
