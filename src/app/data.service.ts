// Used for interacting with the Web API
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userID) {
    return this.http.get('https://jsonplaceholder.typicode.com/users' + userID );
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


}
