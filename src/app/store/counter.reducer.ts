import { createReducer } from "@ngrx/store";

const initialStateOfCounter = 0;

// export const counterReducer = createReducer(initialStateOfCounter);

export function counterReducer(state = initialStateOfCounter): number {
    return state;
}