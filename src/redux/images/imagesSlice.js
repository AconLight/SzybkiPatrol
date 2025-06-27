import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";

export const fetchImages = createAsyncThunk(
  "images/links", 
  async () => {
    try {
      console.log('images/links')
      const response = await axios.get(
        `${url}/images/links`,
        {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        links: {},
        loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.links = action.payload.links
        })
    },
})

export default imagesSlice.reducer