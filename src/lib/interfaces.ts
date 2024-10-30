export interface IDummyJsonResponse {
  total: number;
  skip: number;
  limit: number;
}

export interface IPublicationsResponse extends IDummyJsonResponse {
  posts: IPublication[];
}

export interface ICommentsResponse extends IDummyJsonResponse {
  comments: IComment[];
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  }
}

export interface IPublication {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}