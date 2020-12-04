import { combineReducers } from 'redux'

import { usersReducer } from './users/users.reducer'
import { authReducer } from './auth/auth.reducer'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app/app.reducer'
import { profileReducer } from './profile/profile.reducer'
import { dialogsReducer } from './dialogs/dialogs.reducer'
import { sidebarReducer } from './sidebar/sidebar-reducer'

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
