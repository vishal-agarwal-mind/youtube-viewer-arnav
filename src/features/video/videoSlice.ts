import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { VideoArrayType } from "../../utils/types"
import { searchVideos } from "./fetchVideo";

interface VideoState {
    results: VideoArrayType | [],
    error: string | null,
    status: 'loading' | 'done',
}

const initialState = {
    results: [],
    error: null,
    status: 'done'
} as VideoState;

export const searchSlice = createSlice({
    // name used in action types
    name: "videos",
    
    // initial state for this slice
    initialState,

    // reducers objects
    // objects keys will be used to generate actions
    reducers: {},

    extraReducers: builder => {
        builder.addCase(searchVideos.pending, state => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(searchVideos.fulfilled, (state, { payload }) => {
            state.status = 'done';
            state.results = payload;
        });

        builder.addCase(searchVideos.rejected, (state, { payload }) => {
            state.status = 'done';
            if(payload) state.error = payload?.message!;
        });
    }
});

// exporting the selector to be used in components
export const selectVideos = (state: RootState) => state.search.results;
export const selectStatus = (state: RootState) => state.search.status;
export const selectMessage = (state: RootState) => state.search.error;

// exporting a typed version of conventional useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// exporting our reducer, to be used in store.ts
export default searchSlice.reducer;