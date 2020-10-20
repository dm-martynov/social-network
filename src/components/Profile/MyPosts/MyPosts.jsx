import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => (
  <div className={classes.postsBlock}>
    My posts
    <div>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={classes.posts}>
      <Post message="Hi, how are you?" likesCount="23" />
      <Post message="It's my first message" likesCount="0" />
    </div>
  </div>
);

export default MyPosts;
