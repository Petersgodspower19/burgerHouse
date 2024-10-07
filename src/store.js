import {configureStore} from "@reduxjs/toolkit"
import workSlice from "./workSlice";

const store = configureStore({
    reducer: {
       work: workSlice
    }
})

export default store;