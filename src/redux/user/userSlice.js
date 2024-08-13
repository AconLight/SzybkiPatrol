import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login", 
  async (data) => {
    try {
      const response = await axios({
        method: 'post',
        //url: "https://szybki-patrol-back-5f521e7d73a3.herokuapp.com/users/login",
        url: "http://localhost:3001/users/login",
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
        //"https://szybki-patrol-back-5f521e7d73a3.herokuapp.com/users/login",
        `http://localhost:3001/users/refreshToken`,
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
        //"https://szybki-patrol-back-5f521e7d73a3.herokuapp.com/users/login",
        `http://localhost:3001/users/user/${data.login}`,
        {
          headers: { Authorization: `Bearer ${data.token + ""}` }
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
        data: undefined,
    },
    reducers: {
      logout: (state) => {
        state.data = undefined
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
            state.data = action.payload
            state.data.token = token
        })
        builder.addCase(refreshToken.fulfilled, (state, action) => {
            state.data = action.payload
      })
    },
})

export const {logout} = userSlice.actions

export default userSlice.reducer