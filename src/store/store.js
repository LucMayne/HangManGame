import { configureStore } from "@reduxjs/toolkit";
import hangmanStateReducer from "./hangmanState";

// set up the store
export default configureStore({
    reducer: {
        hangmanState: hangmanStateReducer,
    },
});