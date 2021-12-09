import React, { useEffect, useState } from "react";
import _ from "lodash";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import CommentList from "./comment_list";
import { VideoInterface } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { selectVideos, useTypedSelector } from "../features/video/videoSlice";
import { searchVideos } from "../features/video/fetchVideo";
import { selectTheme } from "../features/theme/themeSlice";

// initial value for selected video
const DEFAULT_VIDEO = { 
	etag: '', id: { videoId: '' }, 
	snippet: {  
		title: '', description: '',
		thumbnails: { default: { url: '' } } 
	} 
};

const Container = () => {
	const dispatch = useDispatch();
	const videos = useTypedSelector(selectVideos);
	const appTheme = useTypedSelector(selectTheme);

	// component states to keep track of selected video and all videoes
	const [selectedVideo, setSelectedVideo] = useState<VideoInterface>(DEFAULT_VIDEO);

	// function to query the youtube api
	// takes in a search keyword and sets states with appropriate videos
	const performSearch = (term: string) => {
		if(!term) return;
		dispatch(searchVideos({ q: term }));
	};

	// effect hook that performs a search on initial render for the keyword "arsenal"
	useEffect(() => { performSearch('arsenal'); }, []);
	
	useEffect(() => {
		if(videos.length) setSelectedVideo(videos[0]);
	}, [videos]);

	// function that performs search using debouncing with .75s interval
	const onInputSearch = _.debounce(performSearch, 750);


	// component JSX
	return <div className={`app ${appTheme === 'dark' ? 'dark-app': ''}`}>
		<SearchBar onTermChange={onInputSearch} />
		<VideoDetail video={selectedVideo} />
		<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        <CommentList videoId={selectedVideo.id.videoId} key={selectedVideo.id.videoId} />
	</div>
	
};

export default Container;
