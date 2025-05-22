import { configureStore } from '@reduxjs/toolkit'; 
import CardSlice from './CardSlice'


 const store=configureStore({
    reducer:{
        cart:CardSlice
    }
})
export default store