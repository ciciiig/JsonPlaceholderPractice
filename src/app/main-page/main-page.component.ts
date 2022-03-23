import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersData } from '../users-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public users!: UsersData[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchUsersData();
  }

  onNameClick(user: UsersData) {
    this.router.navigate([`user/${user.id}`])
  }

  private fetchUsersData() {
    this.http
      .get<UsersData[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      });
  }
}
