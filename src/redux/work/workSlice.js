import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";
import _ from "lodash"



export const workSlice = createSlice({
    name: 'work',
    initialState: {
      data: undefined
    },
    reducers: {
    }, 
})

export default workSlice.reducer