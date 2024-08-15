import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";

export const fetchUserItems = createAsyncThunk(
  "user/userItems", 
  async ({token}) => {
    try {
      const response = await axios.get(
        `${url}/items/userItems`,
        {
          headers: { Authorization: `Bearer ${token + ""}` }
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        items: [],
        loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserItems.fulfilled, (state, action) => {
            state.items = action.payload
        })
    },
})

export default inventorySlice.reducer