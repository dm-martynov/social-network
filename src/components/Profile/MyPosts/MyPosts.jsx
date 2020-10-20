import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => (
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
      {props.postsData.map((post) => (
        <Post
          message={post.message}
          likesCount={post.likesCount}
          id={post.id}
        />
      ))}
    </div>
  </div>
);

export default MyPosts;
