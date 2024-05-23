import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

const store = configureStore({
    reducer:{
        registration: userSlice
    }
})
export default store