import React from 'react'
import classes from './Post.module.css'

const Post = (props: any) => (
  <div className={classes.item}>
    <img
      alt='User-pic'
      src='https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig'
    />
    {props.message}
    <div>
      <span>like</span> {props.likesCount}
    </div>
  </div>
)

export default Post
