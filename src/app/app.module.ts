import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserPageComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
