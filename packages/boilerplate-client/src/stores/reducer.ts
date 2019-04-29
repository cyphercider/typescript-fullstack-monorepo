// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import { Action, IState, INITIAL_STATE } from './ReduxStore'

export default function reducer(state: IState = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'CHANGE_ROUTE': {
      return {
        ...state,
        route: action.route
      }
    }

    default:
      return state
  }
}
