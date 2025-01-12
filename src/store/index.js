import {configureStore} from "@reduxjs/toolkit";
import TabReducer from "./reducers/tab";
import logger from "redux-logger"

const store = configureStore({
    reducer: {
        tab: TabReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store