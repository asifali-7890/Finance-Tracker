import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../store/transactionSlice.jsx';

export const store = configureStore({
    reducer: {
        transactions: transactionReducer,
    },
});