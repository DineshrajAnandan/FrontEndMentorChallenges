import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BaseCommentData, User } from '@app/models/data';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss'],
})
export class CommentInputComponent implements OnInit {
  currentUser!: User;
  @Input('action-name') actionName = 'send';
  @Output() comment = new EventEmitter<BaseCommentData>();

  @ViewChild('contentInput') contentElement!: ElementRef;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.currentUser = this.commonService.currentUser;
  }

  handleComment() {
    let content: string = this.contentElement.nativeElement.value;
    if (!content.trim()) return;
    this.comment.emit({
      id: -1,
      score: 0,
      createdAt: 'now',
      content,
      user: this.currentUser,
    });
    this.contentElement.nativeElement.value = '';
  }
}
