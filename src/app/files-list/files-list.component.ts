import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Files} from "../interfaces/interfaces";

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {

  @Input() public filesList: Files[] = [];
  @Output() public selectedFile = new EventEmitter<Files>()

  constructor() {
  }
  ngOnInit(): void {
  }

  public selectFile(file: Files) {
    this.selectedFile.emit(file)
  }
}
