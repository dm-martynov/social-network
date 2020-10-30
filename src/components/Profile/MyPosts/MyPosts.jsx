import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const addNewMPost = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={classes.postsBlock}>
      My posts
      <AddPostReduxForm onSubmit={addNewMPost} />
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

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostBody"
          placeholder="Enter your post text"
        ></Field>
      </div>

      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "profileAddPostForm" })(AddPostForm);

export default MyPosts;
