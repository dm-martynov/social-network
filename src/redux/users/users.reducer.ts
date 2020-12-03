import { usersAPI } from '../../api/api'
import { PhotosType, UserType } from '../../types/types'
import { updateObjectInArray } from '../../utils/objext-helpers'
import { usersActionTypes } from './users.types'

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array if users ids
}

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case usersActionTypes.FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }

    case usersActionTypes.UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }

    case usersActionTypes.SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }

    case usersActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case usersActionTypes.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      }

    case usersActionTypes.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case usersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }

    default:
      return state
  }
}
