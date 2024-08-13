import { configureStore } from '@reduxjs/toolkit'
import shopSlice from './shop/shopSlice'
import userSlice from './user/userSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    shop: shopSlice,
  },
})