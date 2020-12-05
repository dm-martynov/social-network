import { getUsersAPI } from '../../api/api'
import { PhotosType, UserType } from '../../types/types'
import { updateObjectInArray } from '../../utils/objext-helpers'
import { UserActionsTypes } from './users.actions'
import { usersActionConst } from './users.constants'

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
  action: UserActionsTypes
): InitialStateType => {
  switch (action.type) {
    case usersActionConst.FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {
          followed: true,
        }),
      }

    case usersActionConst.UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {
          followed: false,
        }),
      }

    case usersActionConst.SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      }

    case usersActionConst.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }

    case usersActionConst.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      }

    case usersActionConst.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }

    case usersActionConst.TOGGLE_IS_FOLLOWING_PROGRESS:
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
