import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  const addPostToState = () => {
    props.dispatch(addPostActionCreator());
  };
  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            value={props.postsData.newPostText}
            onChange={onPostChange}
            ref={newPostElement}
          ></textarea>
        </div>

        <div>
          <button onClick={addPostToState}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.postsData.postsData.map((post) => (
          <Post
            message={post.message}
            likesCount={post.likesCount}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
