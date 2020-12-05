import { InferActionTypes } from './../store'
import { ProfileType, PhotosType } from './../../types/types'

export type ProfileActionTypes = InferActionTypes<typeof profileActions>

export const profileActions = {
  addPost: (newPostText: string) => {
    return {
      type: 'ADD_POST',
      payload: newPostText,
    } as const
  },

  setUserProfile: (profile: ProfileType) => {
    return {
      type: 'SET_USER_PROFILE',
      payload: profile,
    } as const
  },

  setStatus: (status: string) => {
    return {
      type: 'SET_STATUS',
      payload: status,
    } as const
  },
  deletePost: (postId: number) => {
    return {
      type: 'DELETE_POST',
      payload: postId,
    } as const
  },

  savePhotoSuccess: (photos: PhotosType) => {
    return {
      type: 'SAVE_PHOTO_SUCCESS',
      payload: photos,
    } as const
  },
  saveProfileSuccess: (profile: ProfileType) => {
    return {
      type: 'SAVE_PROFILE_SUCCESS',
      payload: profile,
    } as const
  },
}
