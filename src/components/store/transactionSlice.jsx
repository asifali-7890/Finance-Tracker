import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: loadFromLocalStorage(),
    },
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.unshift(action.payload);
            localStorage.setItem('transactions', JSON.stringify(state.transactions));
        },
        deleteTransaction: (state, action) => {
            state.transactions = state.transactions.filter(
                (_, index) => index !== action.payload
            );
            localStorage.setItem('transactions', JSON.stringify(state.transactions));
        },
    },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;