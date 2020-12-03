import { UserType } from '../../types/types'
import { usersActionTypes } from './users.types'

type FollowSuccessActionType = {
  type: typeof usersActionTypes.FOLLOW
  payload: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
  return {
    type: usersActionTypes.FOLLOW,
    payload: userId,
  }
}
type UnfollowSuccessActionType = {
  type: typeof usersActionTypes.UNFOLLOW
  payload: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
  return {
    type: usersActionTypes.UNFOLLOW,
    payload: userId,
  }
}
type SetUsersActionType = {
  type: typeof usersActionTypes.SET_USERS
  payload: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: usersActionTypes.SET_USERS,
    payload: users,
  }
}
type SetCurrentPageActionType = {
  type: typeof usersActionTypes.SET_CURRENT_PAGE
  payload: number
}
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => {
  return {
    type: usersActionTypes.SET_CURRENT_PAGE,
    payload: currentPage,
  }
}
type SetUsersTotalCountActionType = {
  type: typeof usersActionTypes.SET_CURRENT_PAGE
  payload: number
}
export const setUsersTotalCount = (
  totalUsersCount: number
): SetUsersTotalCountActionType => {
  return {
    type: usersActionTypes.SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount,
  }
}

type ToggleIsFetchingActionType = {
  type: typeof usersActionTypes.TOGGLE_IS_FETCHING
  payload: boolean
}

export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => {
  return {
    type: usersActionTypes.TOGGLE_IS_FETCHING,
    payload: isFetching,
  }
}

type ToggleFollowingProgressActionType = {
  type: typeof usersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS
  payload: { isFetching: boolean; userId: number }
}

export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressActionType => {
  return {
    type: usersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
      isFetching,
      userId,
    },
  }
}
