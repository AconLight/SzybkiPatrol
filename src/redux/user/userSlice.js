import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/fetching";
import _ from "lodash"

export const login = createAsyncThunk(
  "user/login", 
  async (data) => {
    try {
      console.log(url)
      const response = await axios({
        method: 'post',
        url: `${url}/users/login`,
        data: {login: data.login, password: data.password}
    });
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const refreshToken = createAsyncThunk(
  "user/refreshToken", 
  async (data) => {
    try {
      const response = await axios.get(
        `${url}/users/refreshToken`,
        {
          headers: { Authorization: `Bearer ${data.token + ""}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const fetchUser = createAsyncThunk(
  "user/fetchUser", 
  async (data) => {
    try {
      const response = await axios.get(
        `${url}/users/user/${data.login}`,
        {
          headers: { Authorization: `Bearer ${data.token + ""}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const incUserStat = createAsyncThunk(
  "user/incUserStat", 
  async ({statName}) => {
    try {
      const response = await axios.post(
        `${url}/users/incStat/${statName}`,
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

export const userRepair = createAsyncThunk(
  "user/userRepair", 
  async () => {
    try {
      const response = await axios.post(
        `${url}/users/userRepair`,
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

export const startWork = createAsyncThunk(
  "work/startwork", 
  async ({time}) => {
    try {
      const response = await axios.get(
        `${url}/work/work/${time}`,
        {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const startTrening = createAsyncThunk(
  "trening/startTrening", 
  async ({time}) => {
    try {
      const response = await axios.get(
        `${url}/trening/trening/${time}`,
        {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }
    );
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const activateItem = createAsyncThunk(
  "user/activateItem", 
  async ({itemId}) => {
    try {
      const response = await axios.post(
        `${url}/users/activateItem/${itemId}`,
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

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
          user: undefined
        },
    },
    reducers: {
      logout: (state) => {
        state.data = undefined
        sessionStorage.clear()
      }
    }, 
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload
            sessionStorage.setItem("login", action.payload.login);
            sessionStorage.setItem("token", action.payload.token);
        })

        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const token = state.data.token
            state.data = action.payload || {}
            state.data.token = token
        })
        builder.addCase(activateItem.fulfilled, (state, action) => {
          const newState = _.cloneDeep(state)
          newState.data.items = action.payload.user.items
          return newState
        })
        builder.addCase(startWork.fulfilled, (state, action) => {
          const newState = _.cloneDeep(state)
          newState.data.timers = action.payload?.user?.timers
          return newState
        })
        builder.addCase(startTrening.fulfilled, (state, action) => {
          const newState = _.cloneDeep(state)
          newState.data.timers = action.payload?.user?.timers
          return newState
        })
        builder.addCase(userRepair.fulfilled, (state, action) => {
          const newState = _.cloneDeep(state)
          newState.data.mainStats = action.payload.user.mainStats
          newState.data.stats = action.payload.user.stats
          return newState
        })
        builder.addCase(incUserStat.fulfilled, (state, action) => {
          const newState = _.cloneDeep(state)
          newState.data.mainStats = action.payload.user.mainStats
          newState.data.stats = action.payload.user.stats
          return newState
        })
        builder.addCase(refreshToken.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})

export const {logout} = userSlice.actions

export default userSlice.reducer