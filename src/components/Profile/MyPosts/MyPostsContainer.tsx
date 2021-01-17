import { connect } from 'react-redux'
import { profileActions } from '../../../redux/profile/profile.actions'

import MyPosts from './MyPosts'

const mapStateToProps = (state: any) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

const MyPostsContainer = connect(mapStateToProps, { profileActions })(MyPosts)

export default MyPostsContainer
