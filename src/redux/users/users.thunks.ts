import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../../api/api'
import { AppStateType } from '../rootReducer'
import {
  followSuccess,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollowSuccess,
} from './users.actions'
import {
  UserActionsTypes,
  FollowSuccessActionType,
  UnfollowSuccessActionType,
} from './users.actions'

type GetStateType = () => AppStateType
type DispatchType = Dispatch<UserActionsTypes>
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  UserActionsTypes
>

export const requestUsers = (
  page: number,
  pageSize: number
): ThunkType => async (dispatch, getState) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const data = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setUsersTotalCount(data.totalCount))
}

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (
    userId: number
  ) => FollowSuccessActionType | UnfollowSuccessActionType
) => {
  dispatch(toggleFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.deleteFollowing.bind(usersAPI),
    unfollowSuccess
  )
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.addFollowing.bind(usersAPI),
    followSuccess
  )
}
