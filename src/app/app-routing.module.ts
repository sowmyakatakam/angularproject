import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'notes',
    component: NotesComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
