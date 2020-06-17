import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrillaComponent } from './components/grilla/grilla.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionComponent } from './components/question/question.component';


const routes: Routes = [
  //{path:'grilla', component:SidenavComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'question', component:QuestionComponent}
  //{path:'**',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
