  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersData } from '../models/users-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  public getUsers() {
    // get data of all users
    return this.http
      .get<UsersData[]>('https://jsonplaceholder.typicode.com/users')
  }

  public getUser(id: string | number) {
    // get data of specific user
    return this.http
      .get<UsersData>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  public getUserPosts(id: string | number) {
    // get posts of specific user
    return this.http
      .get<UsersData>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }
}
