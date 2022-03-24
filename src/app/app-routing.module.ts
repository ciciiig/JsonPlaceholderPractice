import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';

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
