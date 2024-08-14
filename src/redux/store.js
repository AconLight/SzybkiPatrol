import { configureStore } from '@reduxjs/toolkit'
import shopSlice from './shop/shopSlice'
import userSlice from './user/userSlice'
import raceSlice from './race/raceSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    shop: shopSlice,
    race: raceSlice
  },
})

