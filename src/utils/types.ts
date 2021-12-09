import { CommentInterface, VideoInterface } from "./interfaces";

type VideoSetterType = (x: VideoInterface) => void;

type VideoArrayType = VideoInterface[];

type StringFunction = (x: string) => void;

type CommentArrayType = CommentInterface[];

type ThemeType = 'dark' | 'light';

export type {
    VideoSetterType,
    VideoArrayType,
    StringFunction,
    CommentArrayType,
    ThemeType
};