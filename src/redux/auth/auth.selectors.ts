import { AppStateType } from '../rootReducer'
import { createSelector } from 'reselect'

const selectAuth = (state: AppStateType) => state.auth

export const selectUserId = createSelector([selectAuth], (auth) => auth.userId)
export const selectIsAuth = createSelector([selectAuth], (auth) => auth.isAuth)
