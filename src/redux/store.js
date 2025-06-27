import { configureStore } from '@reduxjs/toolkit'
import shopSlice from './shop/shopSlice'
import userSlice from './user/userSlice'
import raceSlice from './race/raceSlice'
import inventorySlice from './inventory/inventorySlice'
import imagesSlice from './images/imagesSlice'
import workSlice from './work/workSlice'
import treningSlice from './trening/treningSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    shop: shopSlice,
    race: raceSlice,
    inventory: inventorySlice,
    images: imagesSlice, 
  },
})

