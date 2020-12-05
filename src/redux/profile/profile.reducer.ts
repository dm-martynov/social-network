import { ProfileType } from './../../types/types'
import { PostType } from '../../types/types'
import { ProfileActionTypes } from './profile.actions'

const initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
}

type InitialStateType = typeof initialState

export const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 5,
            message: action.payload,
            likesCount: 2,
          },
        ],
      }
    }
    case 'SET_USER_PROFILE':
      return { ...state, profile: action.payload }
    case 'SET_STATUS':
      return { ...state, status: action.payload }
    case 'DELETE_POST':
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.payload),
      }
    case 'SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload } as ProfileType,
      }
    case 'SAVE_PROFILE_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
      }

    default:
      return state
  }
}
