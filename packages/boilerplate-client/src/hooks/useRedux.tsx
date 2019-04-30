import * as React from 'react'
import {
  useMappedState as useMappedStateLib,
  useDispatch
} from 'redux-react-hook'
import { IState, Action } from '@client/stores/model'

export function useMappedState(
  mapFn: (state: IState) => Partial<IState>
): Partial<IState> {
  const mapState = React.useCallback(mapFn, [])
  return useMappedStateLib(mapState)
}

export function useRedux(
  mapFn: (state: IState) => Partial<IState>
): [Partial<IState>, (action: Action) => void] {
  const dispatch: (action: Action) => void = useDispatch()
  const state = useMappedState(mapFn)
  return [state, dispatch]
}
