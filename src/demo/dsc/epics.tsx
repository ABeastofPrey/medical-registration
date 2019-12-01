import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { ADD_TODO, addTodoSuccess } from "./actions";

export const addTodoEpic = action$ => {
  return action$.pipe(
    ofType(ADD_TODO),
    mergeMap((action: any) => {
      return of(action.payload);
    }),
    map(res => {
      return addTodoSuccess(res);
    })
  );
};
