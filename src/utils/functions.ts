// ALERT !!!!
// THIS PAGE IS JUST FOR REFERENCE
// I WROTE THIS PAGE IN THE BEGINNING
// BUT SINCE I SHIFTED TO REDUX ITS NOT BEING USED ANYWHERE IN THE APP

import axios from "axios";
import { CommentResponseInterface, StatsInterface } from "./interfaces";
import { VideoArrayType } from "./types";

const ROOT_URL = 'https://www.googleapis.com/youtube/v3';

type Options = { key: string, term: string };
type Callback = (x: VideoArrayType) => void;
type CommentOptions = { key: string, videoId: string, maxResults: number, pageToken: string };
type CommentCallback = (x: CommentResponseInterface) => void;
type StatsOptions = { id: string, key: string };
type StatsCallback = (x: StatsInterface) => void;
type FailureCallback = () => void;

// functions responsible to hit the youtube api with appropriate credentials

// if the api call succeeds, it executes the callback function provided to it
// passing the videos array to the callback function
export const apiKeywordSearch = (options: Options, callback: Callback) => {
  
    const params = {
        part: 'snippet',
        key: options.key,
        q: options.term,
        type: 'video'
    };
  
    axios.get(`${ROOT_URL}/search`, { params })
    .then(response => {
        if (callback) callback(response.data.items);
    }).catch(console.log);
};


// if the api call succeeds, it executes the callback function provided to it
// passing the related comments of the related video
export const apiCommentFetch = (options: CommentOptions, callback: CommentCallback, fail: FailureCallback) => {
    
    const { key, videoId, maxResults, pageToken } = options;
  
    const params = {
        part: 'snippet',
        key, videoId,
        maxResults,
        pageToken
    };
  
    axios.get(`${ROOT_URL}/commentThreads`, { params })
    .then(response => {
        if (callback) callback(response.data);
    }).catch(err => {
        fail();
    });
};


// if the api call succeeds, it executes the callback function provided to it
// passing the related stats of the related video
export const apiStatsFetch = (options: StatsOptions, callback: StatsCallback) => {
    const { key, id } = options;
  
    const params = {
        part: 'statistics',
        key, id
    };
  
    axios.get(`${ROOT_URL}/videos`, { params })
    .then(response => {
        if (callback) callback(response.data.items[0].statistics);
    }).catch(console.log);
};