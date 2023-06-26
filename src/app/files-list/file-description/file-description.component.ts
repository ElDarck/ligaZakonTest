import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Files} from "../../interfaces/interfaces";

@Component({
  selector: 'app-file-description',
  templateUrl: './file-description.component.html',
  styleUrls: ['./file-description.component.scss']
})
export class FileDescriptionComponent implements OnInit {

  @Input() public file: Files | null;
  @Output() public backEvent = new EventEmitter()

  ngOnInit(): void {
  }
}
