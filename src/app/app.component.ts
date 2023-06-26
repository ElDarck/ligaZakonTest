import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Files} from "./interfaces/interfaces";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private filesUrl: string = '../assets/data.json';

  public title = 'TestLigaZakon';
  public files: Array<Files> = [];
  public selectedFile: Files | null = null;
  private lastId: string | null;

  public sliderFiles: Array<Files> = [];

  public loading: boolean = false;
  constructor(private http: HttpClient, private router: Router ) {
  }
  ngOnInit(): void {
    this.loading = true;

    this.getData().subscribe( data => {
      this.files = data;

      this.sliderFiles = data.slice(0,3);

      if (this.lastId) {
        const file = this.files.find((el: Files) => el.ID === this.lastId);
        this.selectedFile = file ? file : null;
      }
      this.loading = false;
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.url.includes('post')) {
            this.lastId = event.url.split('/').slice(-1)[0];
            if (this.lastId) {
              const file = this.files.find((el: Files) => el.ID === this.lastId);
              this.selectedFile = file ? file : null;
            }
          } else {
            this.lastId = null;
            this.selectedFile = null;
          }
        }
      });
  }

  private getData() {
    return this.http.get<Array<Files>>(this.filesUrl);
  }

  public setSelectedFile(event: Files) {
    this.selectedFile = event;
  }

  public createNewPost(file: Files):void {
    this.files.unshift(file)
  }
}
