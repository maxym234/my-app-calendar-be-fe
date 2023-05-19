import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL } from '../request/config';

const initialState = { users: [], albums: [] }

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (params, arg) => {
    const response = await fetch(`${API_URL}?from=2023-05-17&to=2023-05-17&location=1&category=&provider=4&service=1&count=1&booking_id=`);
    const resultResponse = await response.json();
    return resultResponse;
  }
)

// export const fetchAlbums = createAsyncThunk(
//   'data/fetchAlbums',
//   async (params, arg) => {
//     const response = await fetch(`${API_URL}${params}`);
//     const resultResponse = await response.json();
//     return resultResponse;
//   }
// )

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    // [fetchAlbums.fulfilled]: (state, action) => {
    //   state.albums = action.payload;
    // }
  },
})

export const { addPosts } = dataSlice.actions
export const userList = (state) => state.dataSlice.users
// export const albumsList = (state) => state.dataSlice.albums
export default dataSlice.reducer