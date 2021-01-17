import React from 'react'
import NewPostForm from './AddPostForm/AddPostForm'
import classes from './MyPosts.module.css'
import Post from './SinglePost/SinglePost'

const MyPosts = React.memo((props) => {
  return (
    <div className={classes.postsBlock}>
      My posts
      <NewPostForm />
      <div className={classes.posts}>
        {/* {props.postsData.map((post) => (
          <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
            id={post.id}
          />
        ))} */}
      </div>
    </div>
  )
})

export default MyPosts
