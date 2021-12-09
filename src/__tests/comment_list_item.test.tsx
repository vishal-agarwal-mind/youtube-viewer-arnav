import CommentListItem from "../components/comment_list_item";
import { render } from "@testing-library/react";
import { comment } from "./testData";
import moment from "moment";

describe('comment list single item', () => {
    it('should display correct number of likes', () => {
        const { getByTestId } = render(<CommentListItem comment={comment} />);
        const likeCount = getByTestId('comment-like');
        expect(likeCount.innerHTML).toBe(`${comment.snippet.topLevelComment.snippet.likeCount} Like(s)`);
    });

    it('should display correct time from now of comment', () => {
        const { getByTestId } = render(<CommentListItem comment={comment} />)
        const time = getByTestId('comment-time');
        expect(time.innerHTML).toBe(moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow());
    });
});