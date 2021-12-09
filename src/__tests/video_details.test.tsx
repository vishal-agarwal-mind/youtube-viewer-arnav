import VideoDetail from "../components/video_detail";
import { render } from "@testing-library/react";
import { pollutedVideo, video } from "./testData";


describe('when rendered with a correct video object', () => {

    it('should render correct title and description for the video', () => {
        const { getByTestId } = render(<VideoDetail video={video} />);
        const title = getByTestId('video-title');
        const description = getByTestId('video-description');
        
        expect(title.innerHTML).toBe(video.snippet.title);
        expect(description.innerHTML).toBe(video.snippet.description);
    });
});

describe('when rendered with an incorrect video object', () => {

    it('should not render correct title and description for the video', () => {
        const { getByTestId } = render(<VideoDetail video={pollutedVideo} />);
        const title = getByTestId('video-title');
        const description = getByTestId('video-description');
        
        expect(title.innerHTML).toBe('');
        expect(description.innerHTML).toBe('');
    });
});