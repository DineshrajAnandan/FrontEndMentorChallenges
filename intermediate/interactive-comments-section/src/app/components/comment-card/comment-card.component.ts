import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommentType } from '@app/enum/commentType';
import { CommentEvent } from '@app/models/commentEvent';
import { CommonService } from '@app/services/common.service';
import {
  BaseCommentData,
  CommentData,
  ReplyCommentData,
  User,
} from 'src/app/models/data';

@Component({
  selector: 'comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {
  @Input('commentData')
  data!: BaseCommentData;
  @Input() replyTo: string | null = null;
  @Output() comment = new EventEmitter<CommentEvent>();

  currentUser!: User;
  showReplyBox: boolean = false;
  isEditMode: boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.currentUser = this.commonService.currentUser;
  }

  get isCurrentUserComment(): boolean {
    return this.currentUser.username === this.data.user.username;
  }

  handleComment(comment: BaseCommentData) {
    this.comment.emit({
      type: CommentType.ReplyAdd,
      comment,
      replyingTo: this.data.user,
      replyToCommentId: this.data.id,
    });
    this.showReplyBox = false;
  }

  handleDeleteComment() {
    this.comment.emit({
      type: CommentType.Delete,
      comment: this.data,
    });
  }
}
