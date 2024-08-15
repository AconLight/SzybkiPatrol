import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";

export const startTrening = createAsyncThunk(
  "trening/startTrening", 
  async ({userToken, time}) => {
    try {
      const response = await axios.get(
        `${url}/trening/trening/${time}`,
        {
          headers: { Authorization: `Bearer ${userToken + ""}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const treningSlice = createSlice({
    name: 'trening',
    initialState: {
    },
    reducers: {
    }, 
    extraReducers: (builder) => {
      builder.addCase(startTrening.fulfilled, (state, action) => {
          
    })
    },
})

export default treningSlice.reducer