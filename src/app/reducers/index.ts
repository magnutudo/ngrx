import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {counterReducer, CounterState} from "./counter";
import {state} from "@angular/animations";


export interface State {
  counter:CounterState

}

export const reducers: ActionReducerMap<State> = {
  counter:counterReducer,
}


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
