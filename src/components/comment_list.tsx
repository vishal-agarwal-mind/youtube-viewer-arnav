import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectComments, selectCommentsMessage } from '../features/comment/commentSlice';
import { searchComments } from '../features/comment/fetchComment';
import Loading from 'react-loading';
import { searchStats } from '../features/stat/fetchStat';
import { selectStats } from '../features/stat/statSlice';
import { useTypedSelector } from '../features/video/videoSlice';
import { CommentArrayType } from '../utils/types';
import CommentListItem from './comment_list_item';
import InfiniteScroll from './infinite_scroll';
import { selectTheme } from '../features/theme/themeSlice';
import { comment } from '../__tests/testData';

type CommentListProps = {
    videoId: string
};

const CommentList = ({ videoId }: CommentListProps) => {
    
    const dispatch = useDispatch();
    const appTheme = useTypedSelector(selectTheme);
    const videoStats = useTypedSelector(selectStats);
    const commentsResponse = useTypedSelector(selectComments);
    const commentsMessage = useTypedSelector(selectCommentsMessage);
    const [comments, setComments] = useState<CommentArrayType | []>([]);
    const [nextPage, setNextPage] = useState<string>('');
    const [message, setMessage] = useState<string | null>('');
    const [isListEnded, setIsListEnded] = useState<boolean>(false);

    useEffect(() => {
        if(videoId) dispatch(searchStats({ id: videoId }));
    }, [videoId]);

    useEffect(() => {
        if(videoStats && (comments.length >= Number(videoStats?.commentCount))) setIsListEnded(true);
    }, [videoStats, comments]);

    useEffect(() => {
        if(commentsResponse) {
            setNextPage(commentsResponse.nextPageToken);
            setComments(prevComments => [...prevComments, ...commentsResponse.items]);
        };
    }, [commentsResponse]);

    useEffect(() => {
        setMessage(commentsMessage);
    }, [commentsMessage]);

    const fetchNewComments = () => {
        if(videoId) dispatch(searchComments({ videoId, pageToken: nextPage }));
    };

    return <div className="comment-list col-md-8">
        {message ? <div>{message}</div> : <></>}
        {videoStats?.commentCount ? <span className={appTheme === 'dark' ? 'dark-input' : ''} data-testid="comment-stat">{videoStats.commentCount} Comments</span> : <></>}
        <InfiniteScroll
            onBottomReached={fetchNewComments}
            listJSX={<>{
                comments.map(comment => <CommentListItem comment={comment} key={comment.id} />)
            }</>} loaderJSX={<Loading type="spin" height={"2.5%"} width={"2.5%"} color={appTheme === 'dark' ? '#aaa' : "#160c61"} />}
            isEnded={isListEnded}
        />
    </div>
};

export default CommentList;