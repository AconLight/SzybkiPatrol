import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShopItems = createAsyncThunk(
  "shop/fetchItems", 
  async () => {
    try {
      const response = await axios.get(
        "https://szybki-patrol-back-5f521e7d73a3.herokuapp.com/items/all"
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