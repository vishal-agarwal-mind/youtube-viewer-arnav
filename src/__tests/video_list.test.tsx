import VideoList from "../components/video_list";
import { render } from "@testing-library/react";
import { videoList } from "./testData";

describe('video list', () => {
    it('should render correct number of video list items', () => {
        const { getAllByRole } = render(<VideoList videos={videoList} onVideoSelect={() => {}} />);
        const items = getAllByRole('listitem');
        expect(items).toHaveLength(videoList.length);
    });
});