interface VideoInterface { 
	etag: string,
	snippet: { 
		thumbnails: { default: { url: string } },
		title: string,
        description: string
	},
    id: { videoId: string, kind?: string }
};

interface CommentInterface {
    etag: string,
    id: string,
    snippet: { topLevelComment: { snippet: {
        textDisplay: string,
        textOriginal: string,
        authorDisplayName: string,
        authorProfileImageUrl: string,
        authorChannelUrl: string,
        likeCount: number,
        publishedAt: string,
    } }, totalReplyCount: number }
};

interface CommentResponseInterface {
    etag: string,
    nextPageToken: string,
    pageInfo: { totalResults: number, resultsPerPage: number },
    items: CommentInterface[]
};

interface StatsInterface {
    viewCount: string, 
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
};

interface ApiParamsInterface {
    key?: string,
    q?: string,
    type?: string,
    part?: string,
    videoId?: string,
    maxResults?: number,
    pageToken?: string,
    id?: string
};


interface ErrorInterface {
    message: string
}

export type {
    VideoInterface,
    CommentInterface,
    CommentResponseInterface,
    StatsInterface,
    ApiParamsInterface,
    ErrorInterface
};