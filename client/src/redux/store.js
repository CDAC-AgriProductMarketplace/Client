// confing store
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import cartSlice from './slices/cartSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
         cart: cartSlice,
    },
});

export default store;