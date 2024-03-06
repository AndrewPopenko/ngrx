import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";

const initialStateOfCounter = 0;

export const counterReducer = createReducer(
    initialStateOfCounter,
    on(increment, (state, action) => state + action.value),
    on(decrement, (state, action) => state - action.value),
);
