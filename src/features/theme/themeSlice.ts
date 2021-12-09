import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ThemeType } from "../../utils/types";

interface ThemeInterface {
    currentTheme: ThemeType
};

const initialState = {
    currentTheme: 'light'
} as ThemeInterface;

export const themeSlice = createSlice({

    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<ThemeType>) => {
            state.currentTheme = action.payload;
        }
    }
});

export const selectTheme = (state: RootState) => state.theme.currentTheme;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;