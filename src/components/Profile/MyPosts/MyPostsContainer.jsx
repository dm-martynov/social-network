import { connect } from 'react-redux'
import { addPost } from '../../../redux/profile/profile.actions'

import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer
