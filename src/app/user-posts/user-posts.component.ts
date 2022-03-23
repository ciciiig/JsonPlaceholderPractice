import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  public posts!: {};

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fetchUser(this.route.snapshot.params['id']);
  }

  public goHome () {
    this.router.navigate([''])
  }

  private fetchUser(id: number) {
    this.http
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
}