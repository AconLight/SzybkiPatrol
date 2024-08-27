import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";
import _ from "lodash"



export const treningSlice = createSlice({
    name: 'trening',
    initialState: {
      data: undefined
    },
    reducers: {
    }, 

})

export default treningSlice.reducer