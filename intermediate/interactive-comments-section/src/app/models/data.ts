export interface Image {
  png: string;
  webp: string;
}

export interface User {
  image: Image;
  username: string;
}

export interface BaseCommentData {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
}

export interface ReplyCommentData extends BaseCommentData {
  replyingTo: string;
}

export interface CommentData extends BaseCommentData {
  replies: ReplyCommentData[];
}

export interface CommentsData {
  currentUser: User;
  comments: CommentData[];
}
