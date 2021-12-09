import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/video/videoSlice';
import statsReducer from '../features/stat/statSlice';
import commentsReducer from '../features/comment/commentSlice';
import suggestReducer from '../features/suggest/suggestSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
    reducer: {

        // reducer responsible for setting video search state
        search: searchReducer,

        // reducer responsible for setting video stats
        stats: statsReducer,

        // reducer responsible for setting comment state
        comments: commentsReducer,

        // reducer responsible for setting suggestion state
        suggests: suggestReducer,
    
        // reducer responsible for setting application theme
        theme: themeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;