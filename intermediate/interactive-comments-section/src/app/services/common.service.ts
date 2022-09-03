import { Injectable } from '@angular/core';
import Data from '../../assets/data.json';
import {
  BaseCommentData,
  CommentsData,
  CommentData,
  ReplyCommentData,
} from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private data: CommentsData;
  private currentCommentId: number = 4;
  constructor() {
    this.data = Data;
  }

  get currentUser() {
    return this.data.currentUser;
  }

  getData() {
    return this.data;
  }

  addReplyComment(
    parentCommentId: number,
    replyComment: ReplyCommentData,
    replyToCommentId: number
  ) {
    replyComment.id = ++this.currentCommentId;
    let parentComment = this.data.comments.find((d) => d.id == parentCommentId);
    if (!parentComment) return;
    if (replyToCommentId === parentCommentId) {
      parentComment.replies.push(replyComment);
      return;
    }
    let replyToCommentIndex = parentComment.replies.findIndex(
      (x) => x.id === replyToCommentId
    );
    parentComment?.replies.splice(replyToCommentIndex + 1, 0, replyComment);
  }

  addComment(comment: BaseCommentData) {
    comment.id = ++this.currentCommentId;
    this.data.comments.push(comment as CommentData);
  }

  updateComment(commentId: number, content: string) {
    let comment = this.findComment(commentId);
    if (!comment) return;
    comment.content = content;
  }

  findComment(commentId: number): BaseCommentData | null {
    for (let comment of this.data.comments) {
      if (comment.id === commentId) return comment;
      for (let subComment of comment.replies)
        if (subComment.id === commentId) return subComment;
    }
    return null;
  }

  deleteComment(commentId: number) {
    let prevCount = this.data.comments.length;
    this.data.comments = this.data.comments.filter((c) => c.id != commentId);
    if (this.data.comments.length < prevCount) return;
    for (let comment of this.data.comments) {
      comment.replies = comment.replies.filter((c) => c.id != commentId);
    }
  }
}
