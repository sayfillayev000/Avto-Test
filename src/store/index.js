import { configureStore } from "@reduxjs/toolkit";
import testsDisplay from "./testsDisplay";
export const store = configureStore({
    reducer: {
        display: testsDisplay,
    }
});
