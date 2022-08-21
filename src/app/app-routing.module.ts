import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MydashComponent } from './mydash/mydash.component';
import { MockViewComponent } from './mock-view/mock-view.component';
const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'posts-component', component: PostsComponent },
  {path: 'mydash-component', component: MydashComponent },
  {path: 'mock-view-component', component: MockViewComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
