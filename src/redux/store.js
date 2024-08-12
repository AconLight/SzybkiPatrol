import { configureStore } from '@reduxjs/toolkit'
import shopSlice from './shop/shopSlice'

export default configureStore({
  reducer: {
    shop: shopSlice,
  },
})