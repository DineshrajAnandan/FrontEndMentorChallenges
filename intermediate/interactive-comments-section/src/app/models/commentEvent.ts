import { CommentType } from '@app/enum/commentType';
import { BaseCommentData, User } from './data';

export interface CommentEvent {
  type: CommentType;
  comment: BaseCommentData;
  replyingTo?: User;
  replyToCommentId?: number;
}
