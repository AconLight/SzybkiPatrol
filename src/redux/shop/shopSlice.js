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

export const buyItem = createAsyncThunk(
  "shop/buyItem", 
  async ({itemName}) => {
    try {
      const response = await axios.put(
        `${url}/items/addItem/${itemName}`,
        {},
        {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }
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
        builder.addCase(buyItem.fulfilled, (state, action) => {
      })
    },
})

export default shopSlice.reducer