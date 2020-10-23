import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPostToState();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onPostChange}
            ref={newPostElement}
          ></textarea>
        </div>

        <div>
          <button onClick={onAddPost}>Add post</button>
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
};

export default MyPosts;
