import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  title = 'learning-angular';
  users: any;
  constructor(private _http: HttpClient){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this._http.get('https://localhost:5001/api/users').subscribe({ next: (response: any) => {
        this.users = response;
      },
      error: (e: Error) => console.error(e),
      complete: () => console.info('complete')}
    )}
}


