import VideoListItem from "../components/video_list_item";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { video } from "./testData";

afterEach(cleanup);

describe("when provided correct video to video list item", () => {
    it("should render correct video title", () => {
        const { getByTestId } = render(<VideoListItem video={video} onVideoSelect={() => {}} />);
        const title = getByTestId('item-title');
        expect(title.innerHTML).toBe(video.snippet.title);
    });

    it("should correctly trigger on video click function", () => {
        const mockClick = jest.fn();
        const { getByTestId } = render(<VideoListItem video={video} onVideoSelect={mockClick} />);
        const listItem = getByTestId("item-item");
        fireEvent.click(listItem);
        expect(mockClick).toHaveBeenCalled();
    });
});