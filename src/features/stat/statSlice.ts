import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { StatsInterface } from "../../utils/interfaces";
import { searchStats } from "./fetchStat";

interface StatState {
    results: StatsInterface | null,
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
    name: "stats",
    
    // initial state for this slice
    initialState,

    // reducers objects
    // objects keys will be used to generate actions
    reducers: {},

    extraReducers: builder => {
        builder.addCase(searchStats.pending, state => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(searchStats.fulfilled, (state, { payload }) => {
            state.status = 'done';
            state.results = payload;
        });

        builder.addCase(searchStats.rejected, (state, { payload }) => {
            state.status = 'done';
            if(payload) state.error = payload?.message!;
        });
    }
});

// exporting the selector to be used in components
export const selectStats = (state: RootState) => state.stats.results;
export const selectStatus = (state: RootState) => state.stats.status;
export const selectMessage = (state: RootState) => state.stats.status;

// exporting our reducer, to be used in store.ts
export default statsSlice.reducer;