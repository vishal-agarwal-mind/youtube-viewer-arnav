import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERP_API_KEY } from "../../strings";
import { ApiParamsInterface, ErrorInterface } from "../../utils/interfaces";

type TermType = { value: string };
// first argument to this function is the action name
// the second argument is a callback function where we 
// can do all our async stuff
// this function will return an array of videoes
// and it will also take in an object specifying api call options
export const searchSuggest = createAsyncThunk<
    string[],
    ApiParamsInterface,
    { rejectValue: ErrorInterface }
>('suggest/search', async (options: ApiParamsInterface, thunkApi) => {

    const url: string = 'https://serpapi.com/search.json';
    const { q } = options;
    const params = {
        q, engine: 'google_autocomplete',
        hl: 'en', gl: 'in', api_key: SERP_API_KEY
    };
  
    const response = await axios.get(url, { params });
    console.log(response);
    if(response.status !== 200) return thunkApi.rejectWithValue({ message: 'There is some issue in loading, please try later' });
    const data: string[] = response.data.suggestions.map((term : TermType) => term.value);
    return data;
});