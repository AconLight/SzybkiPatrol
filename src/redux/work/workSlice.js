import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";

export const startWork = createAsyncThunk(
  "work/startwork", 
  async ({userToken, time}) => {
    try {
      const response = await axios.get(
        `${url}/work/work/${time}`,
        {
          headers: { Authorization: `Bearer ${userToken + ""}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const workSlice = createSlice({
    name: 'work',
    initialState: {
    },
    reducers: {
    }, 
    extraReducers: (builder) => {
      builder.addCase(startWork.fulfilled, (state, action) => {
          
    })
    },
})

export default workSlice.reducer