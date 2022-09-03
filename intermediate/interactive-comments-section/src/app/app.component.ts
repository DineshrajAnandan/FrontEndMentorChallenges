import { Component, OnInit } from '@angular/core';
import { CommentType } from './enum/commentType';
import {
  BaseCommentData,
  CommentsData,
  ReplyCommentData,
  User,
} from './models/data';
import { CommonService } from './services/common.service';
import { CommentEvent } from './models/commentEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data!: CommentsData;
  showConfirmationDialog: boolean = false;
  commentIdForConfirmation: number = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.data = this.commonService.getData();
  }

  handleReplyComment(event: CommentEvent, parentId: number) {
    if (event.type === CommentType.ReplyAdd) {
      this.commonService.addReplyComment(
        parentId,
        {
          ...event.comment,
          replyingTo: (event.replyingTo as User).username,
        } as ReplyCommentData,
        event.replyToCommentId as number
      );
    }
    if (event.type === CommentType.Delete) {
      this.showConfirmationDialog = true;
      this.commentIdForConfirmation = event.comment.id;
    }

    this.refreshData();
  }

  handleDeleteComment(value: boolean) {
    this.showConfirmationDialog = false;
    if (value) this.commonService.deleteComment(this.commentIdForConfirmation);
    this.commentIdForConfirmation = 0;
  }

  handleComment(
    commentData: BaseCommentData,
    commentType: CommentType = CommentType.CommentAdd
  ) {
    if (commentType === CommentType.CommentAdd) {
      this.commonService.addComment(commentData as BaseCommentData);
    }

    this.refreshData();
  }

  refreshData() {
    this.data = this.commonService.getData();
  }
}
