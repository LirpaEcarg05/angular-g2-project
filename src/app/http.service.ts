import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  id:any;

  constructor(private http: HttpClient) { }

  // getPosts(){
  //   return this.http.get(this.postsUrl);
  // }

  getUsers(){
    return this.http.get(this.usersUrl);
  }
}
