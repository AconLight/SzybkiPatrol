import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login", 
  async (data) => {
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: "https://szybki-patrol-back-5f521e7d73a3.herokuapp.com/users/login",
        //url: "http://localhost:3001/users/login",
        data: {login: data.login, password: data.password}
    });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: undefined,
        loginInProgress: false
    },
    reducers: {
      logout: (state) => {
        state.data = undefined
      }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload
            state.loginInProgress = false
        })
    },
})

export const {logout, loginInProgress} = userSlice.actions

export default userSlice.reducer