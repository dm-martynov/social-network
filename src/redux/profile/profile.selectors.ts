import { AppStateType } from './../rootReducer'
import { createSelector } from 'reselect'

const selectProfilePage = (state: AppStateType) => state.profilePage

export const selectProfile = createSelector(
  [selectProfilePage],
  (profilePage) => profilePage.profile
)
export const selectStatus = createSelector(
  [selectProfilePage],
  (profilePage) => profilePage.status
)
