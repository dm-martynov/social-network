import React from 'react'
import Profile from './Profile'
import { connect, useSelector } from 'react-redux'

import { match, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from '../../redux/profile/profile.thunks'
import { selectProfile, selectStatus } from '../../redux/profile/profile.selectors'
import { selectIsAuth, selectUserId } from '../../redux/auth/auth.selectors'

interface IProps {
match: match
}

const ProfileContainer: React.FC<IProps> = (props) =>  {
const {match} = props

const profile = useSelector(selectProfile)
const status = useSelector(selectStatus)
const authorizedUserId = useSelector(selectUserId)
const isAuth = useSelector(selectIsAuth)

 const refreshProfile = () => {
    const userId = match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile()
  }


    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updatestatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    )

}
// connect(mapStateToProps, {
//     getUserProfile,
//     getStatus,
//     updateStatus,
//     savePhoto,
//     saveProfile,
//   })

// ,


export default compose(
  withRouter,
  withAuthRedirect
)(ProfileContainer)
