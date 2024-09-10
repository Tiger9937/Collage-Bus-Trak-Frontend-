import {configureStore} from '@reduxjs/toolkit'
import countSlise from './Slices/countSlice'

export const Stored = configureStore({
    reducer: countSlise
})