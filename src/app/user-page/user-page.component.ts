import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersData } from '../users-data.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  public user!: UsersData;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUser(this.route.snapshot.params['id']);
  }

  public onPostsClick() {
    this.router.navigate([`user/${this.user.id}/posts`]);
  }

  public goHome() {
    this.router.navigate([``]);
  }

  private fetchUser(id: number) {
    this.http
      .get<UsersData>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((user) => {
        this.user = user;
      });
  }
}
