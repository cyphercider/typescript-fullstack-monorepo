// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import { createStore, Store, compose } from 'redux'
import reducer from './redux-reducer'
import { create } from 'redux-react-hook'
import { AppPage, IState, Action } from './redux-model'

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
  appPage: AppPage.Home
}

export const { StoreContext, useDispatch, useMappedState } = create<
  IState,
  Action,
  Store<IState, Action>
>()

export const reduxStore = makeStore()
