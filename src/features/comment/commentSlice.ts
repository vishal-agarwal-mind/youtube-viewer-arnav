import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CommentResponseInterface } from "../../utils/interfaces";
import { searchComments } from "./fetchComment";

interface StatState {
    results: CommentResponseInterface | null,
    error: string | null,
    status: 'loading' | 'done',
}

const initialState = {
    results: null,
    error: null,
    status: 'done'
} as StatState;

export const statsSlice = createSlice({
    // name used in action types
    name: "comments",
    
    // initial state for this slice
    initialState,

    // reducers objects
    // objects keys will be used to generate actions
    reducers: {},

    extraReducers: builder => {
        builder.addCase(searchComments.pending, state => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(searchComments.fulfilled, (state, { payload }) => {
            state.status = 'done';
            state.results = payload;
        });

        builder.addCase(searchComments.rejected, (state, { payload }) => {
            state.status = 'done';
            if(payload) state.error = payload?.message!;
        });
    }
});

// exporting the selector to be used in components
export const selectComments = (state: RootState) => state.comments.results;
export const selectStatus = (state: RootState) => state.comments.status;
export const selectCommentsMessage = (state: RootState) => state.comments.error;

// exporting our reducer, to be used in store.ts
export default statsSlice.reducer;