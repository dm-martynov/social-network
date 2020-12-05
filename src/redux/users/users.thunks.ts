import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'
import { getUsersAPI } from '../../api/api'
import { AppStateType } from '../rootReducer'
import { userActions } from './users.actions'
import { UserActionTypes } from './users.actions'

type GetStateType = () => AppStateType
type DispatchType = Dispatch<UserActionTypes>
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  UserActionTypes
>

export const requestUsers = (
  page: number,
  pageSize: number
): ThunkType => async (dispatch, getState) => {
  dispatch(userActions.toggleIsFetching(true))
  dispatch(userActions.setCurrentPage(page))
  const data = await getUsersAPI.getUsers(page, pageSize)
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

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    getUsersAPI.deleteFollowing.bind(getUsersAPI),
    userActions.unfollowSuccess
  )
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    getUsersAPI.addFollowing.bind(getUsersAPI),
    userActions.followSuccess
  )
}
