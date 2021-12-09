import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../strings";
import { ApiParamsInterface, CommentResponseInterface, ErrorInterface } from "../../utils/interfaces";

// first argument to this function is the action name
// the second argument is a callback function where we 
// can do all our async stuff
// this function will return an array of videoes
// and it will also take in an object specifying api call options
export const searchComments = createAsyncThunk<
    CommentResponseInterface,
    ApiParamsInterface,
    { rejectValue: ErrorInterface }
>('comments/search', async (options: ApiParamsInterface, thunkApi) => {
    
    const { videoId, maxResults = 50, pageToken } = options;
    const params = {
        part: 'snippet',
        key: API_KEY, maxResults,
        pageToken, videoId
    };
  
    const response = await axios.get(`${API_BASE_URL}/commentThreads`, { params });
    if(response.status !== 200) return thunkApi.rejectWithValue({ message: 'Comments for this video have been disabled.' });
    const data: CommentResponseInterface = response.data;
    return data;
    
});