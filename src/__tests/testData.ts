import { CommentInterface, VideoInterface } from "../utils/interfaces";

// function to cause synchronous delay
export const promiseTime = (gap: number = 2500) : Promise<void> => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, gap);
});

export const video: VideoInterface = {
    "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E",
    "id": { "videoId": "uJiyXzkQX9A" },
    "snippet": {
        "title": "Hard work and a cheeky finish from Cedric! | Behind the scenes at Arsenal training centre",
        "description": "The squad prepares for our Premier League clash with Everton at Goodison Park. #arsenal #everton #cedricsoares Enjoy match highlights, training and behind ...",
        "thumbnails": {
            "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
        }
    }
};

const pollutant: string = '____';
export const pollutedVideo : VideoInterface = {
    "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E" + pollutant,
    "id": { "videoId": "uJiyXzkQX9A" + pollutant },
    "snippet": {
        "title": "",
        "description": "",
        "thumbnails": {
            "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
        }
    }
};

export const videoList: VideoInterface[] = [
    {
        "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E1",
        "id": {
            "kind": "youtube#video",
            "videoId": "uJiyXzkQX9A"
        },
        "snippet": {
            "title": "Hard work and a cheeky finish from Cedric! | Behind the scenes at Arsenal training centre",
            "description": "The squad prepares for our Premier League clash with Everton at Goodison Park. #arsenal #everton #cedricsoares Enjoy match highlights, training and behind ...",
            "thumbnails": {
                "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
            }
        }
    },
    {
        "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E2",
        "id": {
            "kind": "youtube#video",
            "videoId": "uJiyXzkQX9A"
        },
        "snippet": {
            "title": "Hard work and a cheeky finish from Cedric! | Behind the scenes at Arsenal training centre",
            "description": "The squad prepares for our Premier League clash with Everton at Goodison Park. #arsenal #everton #cedricsoares Enjoy match highlights, training and behind ...",
            "thumbnails": {
                "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
            }
        }
    },
    {
        "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E3",
        "id": {
            "kind": "youtube#video",
            "videoId": "uJiyXzkQX9A"
        },
        "snippet": {
            "title": "Hard work and a cheeky finish from Cedric! | Behind the scenes at Arsenal training centre",
            "description": "The squad prepares for our Premier League clash with Everton at Goodison Park. #arsenal #everton #cedricsoares Enjoy match highlights, training and behind ...",
            "thumbnails": {
                "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
            }
        }
    },
    {
        "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E4",
        "id": {
            "kind": "youtube#video",
            "videoId": "uJiyXzkQX9A"
        },
        "snippet": {
            "title": "Hard work and a cheeky finish from Cedric! | Behind the scenes at Arsenal training centre",
            "description": "The squad prepares for our Premier League clash with Everton at Goodison Park. #arsenal #everton #cedricsoares Enjoy match highlights, training and behind ...",
            "thumbnails": {
                "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
            }
        }
    },
    {
        "etag": "_ebHw4GOz63GeTnGSe5tQIMra-E5",
        "id": {
            "kind": "youtube#video",
            "videoId": "uJiyXzkQX9A"
        },
        "snippet": {
            "title": "Hard work and a cheeky finish from Cedric! | Behind the scenes at Arsenal training centre",
            "description": "The squad prepares for our Premier League clash with Everton at Goodison Park. #arsenal #everton #cedricsoares Enjoy match highlights, training and behind ...",
            "thumbnails": {
                "default": { "url": "https://i.ytimg.com/vi/uJiyXzkQX9A/default.jpg" }
            }
        }
    },
]   

export const videoId: string = 'uJiyXzkQX9A';

export const comment: CommentInterface = {
    "etag": "AE5w6X4UUBq8MO3PIFW-zwK9CLY",
    "id": "UgxEw5vf7s6c5MqQHD54AaABAg",
    "snippet": {
        "topLevelComment": {
            "snippet": {
                "textDisplay": "your interview questions are too difficult, i will skip this company",
                "textOriginal": "your interview questions are too difficult, i will skip this company",
                "authorDisplayName": "peter Nguyen",
                "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLSuJbTH8vKgqQDko_1qTr7bYdk1H4hSEnzVNRCh=s48-c-k-c0x00ffffff-no-rj",
                "authorChannelUrl": "http://www.youtube.com/channel/UCsi2hMEfaJW0Afb9K5NtRrw",                
                "likeCount": 13,
                "publishedAt": "2021-10-12T03:18:49Z",
            }
        },
        "totalReplyCount": 0,
    }
}