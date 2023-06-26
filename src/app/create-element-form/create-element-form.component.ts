import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Files} from "../interfaces/interfaces";

@Component({
  selector: 'app-create-element-form',
  templateUrl: './create-element-form.component.html',
  styleUrls: ['./create-element-form.component.scss']
})
export class CreateElementFormComponent {

  @Output() saveNewPost = new EventEmitter<Files>()

  newPost : FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  constructor() {
  }

  save(): void {
    console.log(this.newPost.value)
    const post: Files = this.newPost.value;
    post.date = new Date().toISOString();
    post.ID = JSON.stringify(Math.random());
    post.viewCount = 0;
    post.commentsCount = 0;
    console.log(post)
    this.saveNewPost.emit(post)
  }
}
