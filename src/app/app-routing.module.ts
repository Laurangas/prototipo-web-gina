import { DialogComponent } from './components/shared/dialog/dialog.component';
import { ReporteTotalLlantasComponent } from './components/app/reporte-total-llantas/reporte-total-llantas.component';
import { RegistroLlantaComponent } from './components/app/registro-llanta/registro-llanta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrillaComponent } from './components/grilla/grilla.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/app/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionComponent } from './components/question/question.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ModificarLlantaComponent } from './components/app/modificar-llanta/modificar-llanta.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'alta', component: QuestionComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'app/registro-llanta', component: RegistroLlantaComponent},
  { path: 'app/modificar-llanta', component: ModificarLlantaComponent},
  { path: 'app/reporte-llanta', component: ReporteTotalLlantasComponent},
  { path: 'dialog', component: DialogComponent},
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
