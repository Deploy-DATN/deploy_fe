import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/components/header/redux/action'
import { useDispatch } from 'react-redux'
import adminReducer from '@/pages/admin/layout/redux/action'

export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const userAppDispatch = () => useDispatch<AppDispatch>()