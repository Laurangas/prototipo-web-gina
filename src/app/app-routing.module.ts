import { ReporteTotalLlantasComponent } from './components/app/reporte-total-llantas/reporte-total-llantas.component';
import { RegistroLlantaComponent } from './components/app/registro-llanta/registro-llanta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrillaComponent } from './components/grilla/grilla.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionComponent } from './components/question/question.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ModificarLlantaComponent } from './components/app/modificar-llanta/modificar-llanta.component';

const routes: Routes = [
  // {path:'grilla', component:SidenavComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'alta', component: QuestionComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'app/registro-llanta', component: RegistroLlantaComponent},
  { path: 'app/modificar-llanta', component: ModificarLlantaComponent},
  { path: 'app/reporte-llanta', component: ReporteTotalLlantasComponent},
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
