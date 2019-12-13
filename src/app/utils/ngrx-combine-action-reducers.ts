// tslint:disable:max-classes-per-file
import {Action, ActionReducer} from '@ngrx/store';

export interface ActionWithPayload extends Action {
  payload: any; // tslint:disable-line:no-any
}

/**
 * Store action with a payload.
 *
 * class MyAction extends PayloadAction<{id: number}> {
 *   public static readonly TYPE = 'MY_ACTION';
 * }
 */
export abstract class PayloadAction<P> implements ActionWithPayload {
  public static readonly TYPE: string;
  public readonly type = (<typeof PayloadAction> this.constructor).TYPE;

  constructor(public readonly payload: P) {
  }
}

/**
 * Store action without a payload.
 *
 * class MyAction extends SimpleAction {
 *   public static readonly TYPE = 'MY_ACTION';
 * }
 */
export abstract class SimpleAction implements ActionWithPayload {
  public static readonly TYPE: string;
  public readonly type = (<typeof SimpleAction> this.constructor).TYPE;
  public readonly payload = null;
}

export type ActionHandler<T_STATE> = (state: T_STATE, action: ActionWithPayload) => T_STATE;

export interface ActionHandlerMap<T_STATE> {
  [type: string]: ActionHandler<T_STATE>;
}

/**
 * Create a reducer from the map of action reducers.
 */
export const combineActionReducers = <T_STATE>(
  init: T_STATE,
  handlers: ActionHandlerMap<T_STATE>,
): ActionReducer<T_STATE, ActionWithPayload> => {
  return (state: T_STATE = init, action: ActionWithPayload): T_STATE => {
    return action.type in handlers
      ? handlers[action.type](state, action)
      : state;
  };
};
