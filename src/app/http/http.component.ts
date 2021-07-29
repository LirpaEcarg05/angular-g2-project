import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Post, User} from '../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  showDetails:boolean = false;

  // posts?: Post[];

  users: User[] | undefined;

  selectUser?: User;

  showUserDetails: boolean = false;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    // this.http.getPosts().subscribe(posts => {
    //   this.posts = posts as Post[];
    //   console.log(this.posts);
      this.http.getUsers().subscribe(users => {
        this.users = users as User[];
        console.log(this.users);
      })
      
    
  }

  viewUserDetails(id: number){
    this.showUserDetails = true;
    this.http.id = this.users?.indexOf;
    console.log("USER_ID" + id);
    // let index = this.users?.findIndex(users => users.id === id);
    let index = this.getUsers().findIndex(users => users.id === id);
    console.log(index + 'INDEX');
    
    this.selectUser = this.getUsers()[index];
    console.log(this.selectUser);
  }

  backToUser(){
    this.showUserDetails = false;
  }

  getUsers() {
    return this.users || []; 
  }
}
