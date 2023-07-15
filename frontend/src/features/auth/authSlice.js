// 1st step
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { registerUser } from './authService';


// check is user exists in the localstorage

const user = JSON.parse(localStorage.getItem('user'));

// 2.create the initial State

const initialState = {
    user:user ? user : null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
};


// 4. handle the asynchronous fucntions

export const register = createAsyncThunk('auth/register',async(userData,thunkApi)=>{
    try {
        return registerUser(userData)
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

// 2.create the slice

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
    }
})

// 3. export the reducers

export const {reset}  = authSlice.actions;
export default authSlice.reducer
