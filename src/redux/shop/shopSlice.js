import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";

export const fetchShopItems = createAsyncThunk(
  "shop/fetchItems", 
  async () => {
    try {
      const response = await axios.get(
        `${url}/items/all`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        items: [],
        loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShopItems.fulfilled, (state, action) => {
            state.items = action.payload
        })
    },
})

export default shopSlice.reducer