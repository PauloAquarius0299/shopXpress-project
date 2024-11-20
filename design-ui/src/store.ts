import {configureStore} from '@reduxjs/toolkit';
import { authSlice } from './features/auth/authSlice';
import  productReducer  from './features/products/productSlice';

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      product: productReducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false,
      })
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;