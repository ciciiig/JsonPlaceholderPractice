import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UsersData } from '../../models/users-data.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  public user!: Observable<UsersData>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    // get specific user
    this.user = this.userService.getUser(this.route.snapshot.params['id'])
  }

  public onPostsClick() {
    this.router.navigate([`user/${this.route.snapshot.params['id']}/posts`]);
  }

  public goHome() {
    this.router.navigate([``]);
  }
}
