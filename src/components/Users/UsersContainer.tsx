import { connect } from 'react-redux'

import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { compose } from 'redux'
import {
  getFollowingInProgress,
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users/users.selectors'
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/rootReducer'
import { follow, requestUsers, unfollow } from '../../redux/users/users.thunks'

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize)
  }
  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { follow, unfollow, getUsers: requestUsers }
  )
)(UsersContainer)
