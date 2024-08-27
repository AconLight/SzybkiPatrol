import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";
import _ from "lodash"


export const fetchUserViewed = createAsyncThunk(
  "race/fetchUserViewed", 
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
  "race/fightUserViewed", 
  async ({oponentNick}) => {
    try {
      const response = await axios.get(
        `${url}/race/fight/${oponentNick}/15`,
        {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
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
        fight: undefined,
        data: {}
    },
    reducers: {
    }, 
    extraReducers: (builder) => {
      builder.addCase(fetchUserViewed.fulfilled, (state, action) => {
          state.userViewed = action.payload
          state.fight = undefined
      })
      builder.addCase(fightUserViewed.fulfilled, (state, action) => {
          const newState = _.cloneDeep(state)
          newState.data.timers = action.payload?.user?.timers || {}
          newState.fight = action.payload.fight
          return newState
    })
    },
})

export default raceSlice.reducer