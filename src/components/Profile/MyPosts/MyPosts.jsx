import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
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
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength10]}
          component={Textarea}
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
