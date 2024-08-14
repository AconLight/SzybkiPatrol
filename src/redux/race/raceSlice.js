import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dev = 'http://localhost:3001'
const staging = 'https://szybki-patrol-back-5f521e7d73a3.herokuapp.com'

const url = staging

export const fetchUserViewed = createAsyncThunk(
  "user/fetchUserViewed", 
  async (data) => {
    try {
      const response = await axios.get(
        `${url}/users/userByNick/${data.nick}`,
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const fightUserViewed = createAsyncThunk(
  "user/fightUserViewed", 
  async ({userToken, oponentNick}) => {
    try {
      const response = await axios.get(
        `${url}/race/fight/${oponentNick}/5`,
        {
          headers: { Authorization: `Bearer ${userToken + ""}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const raceSlice = createSlice({
    name: 'race',
    initialState: {
        userViewed: undefined,
        fight: undefined
    },
    reducers: {
    }, 
    extraReducers: (builder) => {
      builder.addCase(fetchUserViewed.fulfilled, (state, action) => {
          state.userViewed = action.payload
          state.fight = undefined
      })
      builder.addCase(fightUserViewed.fulfilled, (state, action) => {
          state.fight = action.payload
    })
    },
})

export default raceSlice.reducer