// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import { createStore, Store, compose } from 'redux'
import reducer from './reducer'
import { create } from 'redux-react-hook'

export interface IState {
  route: string
}

export type Action = {
  type: 'CHANGE_ROUTE'
  route: string
}

export function makeStore(): Store<IState, Action> {
  return createStore(
    reducer,
    INITIAL_STATE as any,
    compose(
      (window as any).devToolsExtension
        ? (window as any).devToolsExtension()
        : (f: any) => f
    )
  )
}

export const INITIAL_STATE: IState = {
  route: '/'
}

export const { StoreContext, useDispatch, useMappedState } = create<
  IState,
  Action,
  Store<IState, Action>
>()

export const reduxStore = makeStore()
