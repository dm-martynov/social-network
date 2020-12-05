import { UserType } from '../../types/types'
import { InferActionTypes } from '../store'

export type UserActionTypes = InferActionTypes<typeof userActions>

export const userActions = {
  followSuccess: (userId: number) => {
    return {
      type: 'FOLLOW',
      payload: userId,
    } as const
  },

  unfollowSuccess: (userId: number) => {
    return {
      type: 'UNFOLLOW',
      payload: userId,
    } as const
  },

  setUsers: (users: Array<UserType>) => {
    return {
      type: 'SET_USERS',
      payload: users,
    } as const
  },

  setCurrentPage: (currentPage: number) => {
    return {
      type: 'SET_CURRENT_PAGE',
      payload: currentPage,
    } as const
  },

  setUsersTotalCount: (totalUsersCount: number) => {
    return {
      type: 'SET_TOTAL_USERS_COUNT',
      payload: totalUsersCount,
    } as const
  },

  toggleIsFetching: (isFetching: boolean) => {
    return {
      type: 'TOGGLE_IS_FETCHING',
      payload: isFetching,
    } as const
  },

  toggleFollowingProgress: (isFetching: boolean, userId: number) => {
    return {
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      payload: {
        isFetching,
        userId,
      },
    } as const
  },
}
