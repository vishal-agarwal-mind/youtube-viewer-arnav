import React, { useEffect, useState } from "react";
import { selectTheme } from "../features/theme/themeSlice";
import { useTypedSelector } from "../features/video/videoSlice";
import { VideoInterface } from "../utils/interfaces";

type VideoProps = { 
	video: VideoInterface,
};

const VideoDetail = ({ video }: VideoProps) => {

	const appTheme = useTypedSelector(selectTheme);
	// component state that stores the url to selected video
	const [url, setUrl] = useState<string>('');

	// effect hooks that sets the url state to current video url
	// it fires every time the selected video changes
	useEffect(() => {
		if(video.id) setUrl(`https://www.youtube.com/embed/${video.id.videoId}`);
	}, [video]);

	// short circuit condition
	// if there is no selected video, we render loading state
	if (!video.id) return <div>Loading...</div>;

	// component JSX
	return <div className="video-detail col-md-8">
		<div className="embed-responsive embed-responsive-16by9">
			<iframe
				title={video.snippet.title}
				className="embed-responsive-item"
				src={url}
			/>
		</div>
		<div className={`details ${appTheme === 'dark' ? 'dark-input' : ''}`}>
			<div data-testid="video-title">{video.snippet.title}</div>
			<div data-testid="video-description">{video.snippet.description}</div>
		</div>
	</div>
};

export default VideoDetail;