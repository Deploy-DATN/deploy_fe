import { createSlice, createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { getAccount, getMyMotel, MyMotel, User } from './reducer'

interface AccountState {
    user: User | null;
    myMotel: MyMotel[] | null;
    isLoading: boolean;
    isErr: boolean;
}

export const fetchAccount = createAsyncThunk(
    'user/fetch_user',
    async () => {
        return await getAccount();
    }
)

export const fetchMyMotel = createAsyncThunk(
    'user/fetch_my-motel',
    async () => {
        return await getMyMotel();
    }
)

const initialState: AccountState = {
    user: null,
    myMotel: null,
    isLoading: false,
    isErr: false
}

export const action = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccount.fulfilled, (state, action) => {
                state.user = {
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
            });

        builder
            .addCase(fetchMyMotel.fulfilled, (state, action) => {
                state.myMotel = action.payload;
                state.isLoading = false;
                state.isErr = false;
            })
            .addCase(fetchMyMotel.pending, (state, action) => {
                state.isLoading = true;
                state.isErr = false;
            })
            .addCase(fetchMyMotel.rejected, (state, action) => {
                state.isLoading = false;
                state.isErr = true;
            });
    },
})

export default action.reducer