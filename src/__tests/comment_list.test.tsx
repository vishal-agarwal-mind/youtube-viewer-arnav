import CommentList from "../components/comment_list";
import { render } from "@testing-library/react";
import { promiseTime, videoId } from "./testData";
import { Provider } from "react-redux";
import { store } from "../app/store";

beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
});

const renderCommentList = () => render(<Provider store={store}>
    <CommentList videoId={videoId} />
</Provider>)

describe('when provide with correct video id', () => {
    it('should show correct number of comments', async () => {
        const { getByTestId } = renderCommentList();
        await promiseTime();
        const comments = getByTestId('comment-stat');

        // at the time of writing this test case the comments count was 351
        // so in future the comments count should be >= 351
        // deleting comment is a very rare event and we are neglecting it
        expect(Number(String(comments.innerHTML).split(' ')[0])).toBeGreaterThan(350);
    });
});