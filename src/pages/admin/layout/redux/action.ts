import { createSlice, createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { getAccount, User } from './reducer'

interface AccountState {
    data: User | null;
    isLoading: boolean;
    isErr: boolean;
}

export const fetchAccount = createAsyncThunk(
    'admin/fetchadmin',
    async () => {
        return await getAccount();
    }
)

const initialState: AccountState = {
    data: null,
    isLoading: false,
    isErr: false
}

export const action = createSlice({
    name: 'admin_account',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccount.fulfilled, (state, action) => {
                state.data = {
                    ...action.payload,
                    avatar: action.payload.avatar || "https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2Fc68b44ba-41f4-4985-a339-f9378b7fec37.png?alt=media",
                };
                state.isLoading = false;
                state.isErr = false;
            })
            .addCase(fetchAccount.pending, (state, action) => {
                state.isLoading = true;
                state.isErr = false;
            })
            .addCase(fetchAccount.rejected, (state, action) => {
                state.isLoading = false;
                state.isErr = true;
            })
    },
})

export default action.reducer