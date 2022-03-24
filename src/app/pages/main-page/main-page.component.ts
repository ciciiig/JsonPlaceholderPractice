import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersData } from 'src/app/models/users-data.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public users!: Observable<UsersData[]>;

  constructor(private router: Router, public userService: UserService) {}

  ngOnInit() {
    // call service to get users data from jsonplaceholder
    this.users = this.userService.getUsers();
  }

  onNameClick(user: UsersData) {
    this.router.navigate([`user/${user.id}`])
  }
}
