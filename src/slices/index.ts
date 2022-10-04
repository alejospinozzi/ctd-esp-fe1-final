import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createThunk } from "../hooks";
import { getCharacters } from "../services";

const LIMIT = 9;

// export type ListCharacter = {
//     characters: ICharacter[];
//     loading: boolean;
//     offset: number;
//     favorites: number[];
// };

// const initialState: ListCharacter = {
//     characters: [],
//     offset: 0,
//     loading: false,
//     favorites: [],
// };

// const timeout = (ms: number) =>
//     new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(null);
//     }, ms);
// });

// export const loadCharacters = createThunk<ICharacter[], void>(
//     "Characters/fetchCharacters",
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState();
//         const { offset } = state.characters;
//         return getCharacters({
//             limit: LIMIT.toString(),
//             offset: offset.toString(),
//         });
//     }
// );

// export const charactersSlice = createSlice({
//     name: "characters",
//     initialState,
//     reducers: {
//         nextPage: (state) => {
//             state.offset += LIMIT;
//         },
//         prevPage: (state) => {
//             state.offset -= LIMIT;
//         },
//         addToCart: (state, action: { payload: number }) => {
//             state.favorites = [...state.favorites, action.payload];
//         },
//         removeFromCart: (state, action: { payload: number }) => {
//             state.favorites = state.favorites.filter((id) => id !== action.payload);
//         },
//         },
//         extraReducers: (builder) => {
//             builder.addCase(loadCharacters.pending, (state) => {
//                 state.loading = true;
//             });
//             builder.addCase(loadCharacters.fulfilled, (state, action) => {
//                 state.characters = action.payload;
//                 state.loading = false;
//             });
//             builder.addCase(loadCharacters.rejected, (state, action) => {
//                 state.loading = false;
//             });
//         },
//     });