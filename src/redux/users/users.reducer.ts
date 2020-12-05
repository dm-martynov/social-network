import { UserType } from '../../types/types'
import { updateObjectInArray } from '../../utils/objext-helpers'
import { UserActionTypes } from './users.actions'

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array if users ids
}

type InitialStateType = typeof initialState

export const usersReducer = (
  state = initialState,
  action: UserActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {
          followed: true,
        }),
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {
          followed: false,
        }),
      }

    case 'SET_USERS':
      return {
        ...state,
        users: [...action.payload],
      }

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      }

    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.payload,
      }

    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.payload,
      }

    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
      }

    default:
      return state
  }
}
