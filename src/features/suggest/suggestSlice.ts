import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { searchSuggest } from "./fetchSuggest";

interface SuggestState {
    results: string[] | null,
    error: string | null,
    status: 'loading' | 'done'
};

const initialState = {
    results: null,
    error: null,
    status: 'done'
} as SuggestState;

export const suggestSlice = createSlice({
    name: 'suggest',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder.addCase(searchSuggest.pending, state => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(searchSuggest.fulfilled, (state, { payload }) => {
            state.status = 'done';
            state.results = payload;
        });

        builder.addCase(searchSuggest.rejected, (state, { payload }) => {
            state.status = 'done';
            if(payload) state.error = payload?.message!;
        });
    }
});

export const selectSuggest = (state: RootState) => state.suggests.results;

export default suggestSlice.reducer;