import { action } from 'typesafe-actions'

import { UserType } from '../../types/types'
import { usersActionConst } from './users.constants'

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg
}

export type ActionsTypes =
  | FollowSuccessActionType
  | UnfollowSuccessActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetUsersTotalCountActionType
  | ToggleFollowingProgressActionType
  | ToggleIsFetchingActionType

type FollowSuccessActionType = {
  type: typeof usersActionConst.FOLLOW
  payload: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
  return {
    type: inferLiteralFromString(usersActionConst.FOLLOW),
    payload: userId,
  }
}
type UnfollowSuccessActionType = {
  type: typeof usersActionConst.UNFOLLOW
  payload: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
  return {
    type: usersActionConst.UNFOLLOW,
    payload: userId,
  }
}
type SetUsersActionType = {
  type: typeof usersActionConst.SET_USERS
  payload: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: usersActionConst.SET_USERS,
    payload: users,
  }
}
type SetCurrentPageActionType = {
  type: typeof usersActionConst.SET_CURRENT_PAGE
  payload: number
}
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => {
  return {
    type: usersActionConst.SET_CURRENT_PAGE,
    payload: currentPage,
  }
}

type SetUsersTotalCountActionType = {
  type: typeof usersActionConst.SET_TOTAL_USERS_COUNT
  payload: number
}
export const setUsersTotalCount = (
  totalUsersCount: number
): SetUsersTotalCountActionType => {
  return {
    type: usersActionConst.SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount,
  }
}

type ToggleIsFetchingActionType = {
  type: typeof usersActionConst.TOGGLE_IS_FETCHING
  payload: boolean
}

export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => {
  return {
    type: usersActionConst.TOGGLE_IS_FETCHING,
    payload: isFetching,
  }
}

type ToggleFollowingProgressActionType = {
  type: typeof usersActionConst.TOGGLE_IS_FOLLOWING_PROGRESS
  payload: { isFetching: boolean; userId: number }
}

export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressActionType => {
  return {
    type: usersActionConst.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
      isFetching,
      userId,
    },
  }
}
