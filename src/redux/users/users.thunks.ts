import { BaseThunkType } from './../store'
import { Dispatch } from 'react'
import { UsersAPI } from '../../api/users.api'
import { userActions } from './users.actions'
import { UserActionTypes } from './users.actions'

type DispatchType = Dispatch<UserActionTypes>
type UserThunkType = BaseThunkType<UserActionTypes>

export const requestUsers = (
  page: number,
  pageSize: number
): UserThunkType => async (dispatch) => {
  dispatch(userActions.toggleIsFetching(true))
  dispatch(userActions.setCurrentPage(page))
  const data = await UsersAPI.getUsers(page, pageSize)
  dispatch(userActions.toggleIsFetching(false))
  dispatch(userActions.setUsers(data.items))
  dispatch(userActions.setUsersTotalCount(data.totalCount))
}

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => UserActionTypes
) => {
  dispatch(userActions.toggleFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(userActions.toggleFollowingProgress(false, userId))
}

export const unfollow = (userId: number): UserThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    UsersAPI.deleteFollowing.bind(UsersAPI),
    userActions.unfollowSuccess
  )
}

export const follow = (userId: number): UserThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    UsersAPI.addFollowing.bind(UsersAPI),
    userActions.followSuccess
  )
}
