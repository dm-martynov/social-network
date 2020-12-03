import { setAuthUserDataThunk } from '../auth/auth.thunks'
import { initializingSuccess } from './app.actions'

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(setAuthUserDataThunk())
  Promise.all([promise]).then(() => {
    dispatch(initializingSuccess())
  })
}
