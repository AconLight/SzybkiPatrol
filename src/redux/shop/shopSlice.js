import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dev = 'http://localhost:3001'
const staging = 'https://szybki-patrol-back-5f521e7d73a3.herokuapp.com'

const url = staging

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