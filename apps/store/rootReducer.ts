import { combineReducers } from "redux";
import { exampleReducer } from "./example";

export const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
