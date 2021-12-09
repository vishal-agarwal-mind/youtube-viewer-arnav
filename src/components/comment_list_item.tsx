import moment from 'moment';
import React from 'react';
import { selectTheme } from '../features/theme/themeSlice';
import { useTypedSelector } from '../features/video/videoSlice';
import { CommentInterface } from '../utils/interfaces';

type CommentItemProps = { comment: CommentInterface };

const CommentListItem = ({ comment }: CommentItemProps) => {

    const appTheme = useTypedSelector(selectTheme);
    const { topLevelComment } = comment.snippet;
    const { textDisplay, likeCount, authorDisplayName, publishedAt, authorChannelUrl, authorProfileImageUrl } = topLevelComment.snippet;
    return <div className={`comment-item ${appTheme === 'dark' ? 'dark-comment' : ''}`}>
        <a className="comment-image" href={authorChannelUrl}>
            <img alt={authorDisplayName} src={authorProfileImageUrl} />
        </a>
        <div className="comment-data">
            <h5>{authorDisplayName} | <span data-testid="comment-time">{moment(publishedAt).fromNow()}</span></h5>
            <p dangerouslySetInnerHTML={{ __html: textDisplay }} />
            {Number(likeCount) ? <span data-testid="comment-like">{likeCount} Like(s)</span> : <></>}
        </div>
    </div>
};

export default CommentListItem;