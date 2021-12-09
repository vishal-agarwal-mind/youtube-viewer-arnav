import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../strings";
import { ApiParamsInterface, ErrorInterface } from "../../utils/interfaces";
import { VideoArrayType } from "../../utils/types";

// first argument to this function is the action name
// the second argument is a callback function where we 
// can do all our async stuff
// this function will return an array of videoes
// and it will also take in an object specifying api call options
export const searchVideos = createAsyncThunk<
    VideoArrayType,
    ApiParamsInterface,
    { rejectValue: ErrorInterface }
>('videos/search', async (options: ApiParamsInterface, thunkApi) => {
    
    const { q } = options;
    const params = {
        part: 'snippet',
        key: API_KEY, q,
        type: 'video'
    };
  
    const response = await axios.get(`${API_BASE_URL}/search`, { params });
    if(response.status !== 200) return thunkApi.rejectWithValue({ message: 'There is some issue in loading, please try later' });
    const data: VideoArrayType = response.data.items;
    return data;
    
});