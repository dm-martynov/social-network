import { InferActionTypes } from '../store'

export type AppActionTypes = InferActionTypes<typeof appActions>

export const appActions = {
  initializingSuccess: () =>
    ({
      type: 'SET_INITIALIZED',
    } as const),
}
