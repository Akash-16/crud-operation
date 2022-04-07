import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userList: [],
    allpostData: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUser: (state, { payload }) => {
            state.userList = payload;
        },
        getAllpost: (state, {payload}) => {
            state.allpostData = payload
        }
    }
})

export const { getUser, getAllpost } = userSlice.actions;
export default userSlice.reducer;
export const getAluser = (state: any) => state?.user?.userList; 
export const allPost = (state: any) => state?.user?.allpostData;
