import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../strings";
import { ApiParamsInterface, ErrorInterface, StatsInterface } from "../../utils/interfaces";

// first argument to this function is the action name
// the second argument is a callback function where we 
// can do all our async stuff
// this function will return an array of videoes
// and it will also take in an object specifying api call options
export const searchStats = createAsyncThunk<
    StatsInterface,
    ApiParamsInterface,
    { rejectValue: ErrorInterface }
>('stats/search', async (options: ApiParamsInterface, thunkApi) => {
    
    const { id } = options;
    const params = {
        part: 'statistics',
        key: API_KEY, id
    };
  
    const response = await axios.get(`${API_BASE_URL}/videos`, { params });
    if(response.status !== 200) return thunkApi.rejectWithValue({ message: 'There is some issue in loading, please try later' });
    const data: StatsInterface = response.data.items[0].statistics;
    return data;
    
});