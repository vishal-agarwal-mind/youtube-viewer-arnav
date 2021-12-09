import React, { useEffect, useState } from "react";
import { selectTheme } from "../features/theme/themeSlice";
import { useTypedSelector } from "../features/video/videoSlice";
import { VideoInterface } from "../utils/interfaces";
import { VideoSetterType } from "../utils/types";

type VideoListItemProps = {
	video: VideoInterface,
	onVideoSelect: VideoSetterType
};

const VideoListItem = ({ video, onVideoSelect }: VideoListItemProps) => {

	// component state to hold the url to the image of particular video
	const [imageUrl, setImageUrl] = useState<string>('');
	const appTheme = useTypedSelector(selectTheme);
	
	// effect hook that sets the image url of particular video
	// this hooks fires every time the videos data changes
	useEffect(() => {
		if(video.id) setImageUrl(video.snippet.thumbnails.default.url);
	}, [video]);

	// component JSX
	return <li 
		data-testid="item-item" 
		onClick={() => onVideoSelect(video)} 
		className={`list-group-item ${appTheme === 'dark' ? 'dark-input' : ''}`}
	>
		<div className="video-list media">
			<div className="media-left">
				<img className="media-object" alt="video thumbnail" src={imageUrl} />
			</div>
			<div className="media-body">
				<div data-testid="item-title" className="media-heading">{video.snippet.title}</div>
			</div>
		</div>
	</li>
};

export default VideoListItem;
