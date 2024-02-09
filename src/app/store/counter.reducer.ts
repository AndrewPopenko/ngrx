import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialStateOfCounter = 0;

export const counterReducer = createReducer(
    initialStateOfCounter, on(increment,(state, action) => state + action.value));


// export function counterReducer(state = initialStateOfCounter): number {
//     return state;
// }