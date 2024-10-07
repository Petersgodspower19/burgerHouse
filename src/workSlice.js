import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mainImgSrc : "",
}

const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        updateMainImage(state, action) {
            state.mainImgSrc = action.payload;
        }
    }
})

export const {updateMainImage} = workSlice.actions;
export default workSlice.reducer;