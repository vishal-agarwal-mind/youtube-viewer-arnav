import React from "react";
import { VideoInterface } from "../utils/interfaces";
import { VideoArrayType, VideoSetterType } from "../utils/types";
import VideoListItem from "./video_list_item";

type VideoListProps = {
	videos: VideoArrayType,
	onVideoSelect: VideoSetterType
};

const VideoList = ({ videos, onVideoSelect }: VideoListProps) => {

	// function that takes in all the videoes as the only argument
	// it maps them to JSX 
	const videoItems = videos.map((video: VideoInterface) => {
		return <VideoListItem
			onVideoSelect={onVideoSelect}
			key={video.etag}
			video={video}
		/>
  	});

	// component JSX
	return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;