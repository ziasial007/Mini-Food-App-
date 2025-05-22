import { createSlice } from '@reduxjs/toolkit';

const CardSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            let countItem = state.find((item) => item.id === action.payload.id)
            if (countItem) {
                return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
            } else {
                state.push(action.payload)
            }
        },
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        Increment: (state, action) => {
            return state.map((item) => (item.id === action.payload ? { ...item, qty: item.qty < 5 ? item.qty + 1 : item.qty } : item))
        },
        Decrement: (state, action) => {
            return state.map((item) => (item.id === action.payload ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty } : item))
        }
    }
})
export const { AddItem, RemoveItem, Increment, Decrement } = CardSlice.actions;
export default CardSlice.reducer

