import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'user/:id',
    component: UserPageComponent,
  },
  {
    path: 'user/:id/posts',
    component: UserPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
